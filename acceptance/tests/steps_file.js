// in this file you can append custom step methods to 'I' object
const loginPage = require("../tests/pages/Login.js");

module.exports = function () {
    return actor({
        loginAs: function (user, password) {
            this.amOnPage('/');
            this.resizeWindow("maximize", "maximize");
            this.waitForVisible(loginPage.elements.pageDescriptionCss, 20);
            this.see(loginPage.elements.pageDescriptionTxt, loginPage.elements.pageDescriptionCss)
            this.fillField(loginPage.elements.usernameInput, user);
            this.fillField(loginPage.elements.passwordInput, password);
            this.click(loginPage.elements.loginBtn);
        },

        logoutFromApp: function () {
            this.waitForVisible(loginPage.elements.logoutBtn, 5);
            this.click(loginPage.elements.logoutBtn);
            this.waitForInvisible(loginPage.elements.logoutBtn, 10);

            this.waitForVisible(loginPage.elements.pageDescriptionCss, 10)
        },
        checkLoggedInAs(user) {
            this.seeTextEquals("Hello " + user, loginPage.elements.greetingsText);
            this.seeElement("p.main-button");
        },

        generateUniqid() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (let i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    });
}
