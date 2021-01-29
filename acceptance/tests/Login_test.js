Feature('Login');
let soleUser;
let password;
let errorMsg;
let emptyString, numericValue, specialChars, nonAscii;



BeforeSuite(({I}) => {
    soleUser = "Luke";
    password = "Skywalker"
    errorMsg = "Invalid username or password!";
    emptyString = " ";
    numericValue = "2345542";
    specialChars = "$%$#%$#%#"
    nonAscii = "あいうえお";
});

AfterSuite(({I}) => {

});
Scenario('test login positiveCase', ({ I, employeeListPage }) => {
    I.loginAs(soleUser, password);
    I.checkLoggedInAs(soleUser);
});

Scenario('test login negative cases', ({I, loginPage}) => {
    I.loginAs(emptyString, password);
    loginPage.validateErrorMessage(errorMsg);
    I.loginAs(numericValue, password);
    loginPage.validateErrorMessage(errorMsg);
    I.loginAs(specialChars, password);
    loginPage.validateErrorMessage(errorMsg);
});
