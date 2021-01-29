// in this file you can append custom step methods to 'I' object
const loginPage = require("../tests/pages/Login.js");

module.exports = function () {
    return actor({
        loginAs: function (user, password) {
            this.amOnPage('/');
            this.resizeWindow("fullscreen", "fullscreen");
            this.waitForVisible(loginPage.elements.pageDescriptionXpath, 20);
            this.fillField(loginPage.elements.usernameInput, user);
            this.fillField(loginPage.elements.usernameInput, password);
            this.click(loginPage.elements.loginBtn);
        },
        logoutFromApp: function () {
            this.waitForVisible(loginPage.elements.logoutBtn, 5);
            this.click(loginPage.elements.logoutBtn);
            this.waitForInvisible(loginPage.elements.logoutBtn, 10);

            this.waitForVisible(loginPage.elements.pageDescriptionXpath, 10)
        },
        checkLoggedInAs(user) {
            this.seeTextEquals("Hello " + user, loginPage.elements.greetingsText);
            this.seeElement("p.main-button");
        }
    });
}
