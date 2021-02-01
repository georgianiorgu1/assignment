const { I } = inject();

module.exports = {
    elements: {
        errorMessageElement: 'p.error-message',
        pageDescriptionTxt: 'Username: "Luke" Password: "Skywalker"',
        pageDescriptionCss: '#login-form > fieldset > p.info',
        usernameInput: '//input[@ng-model="user.name"]',
        passwordInput: '#login-form > fieldset > label:nth-child(4) > input',
        loginBtn: '#login-form > fieldset > button',
        logoutBtn: "//div[contains(@class, 'logout-btn')]/img",
        greetingsText: "p#greetings"
    },

    validateErrorMessage: function (text) {
        I.waitForVisible(this.elements.errorMessageElement, 30);
        I.see(text, this.elements.errorMessageElement);
    }

}
