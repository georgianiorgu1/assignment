Feature('EmployeeOperations');

let soleUser;
let password;
let firstName, lastName, date, email;
let editFirstName, editLastName, editDate, editEmail;



BeforeSuite(async ({I}) => {
    soleUser = "Luke";
    password = "Skywalker";
    firstName = await I.generateUniqid() + "Testing";
    lastName = await I.generateUniqid() + "Testerson";
    date = "2021-12-11";
    email = "test" + await I.generateUniqid() + "@example.com";
    editFirstName = await I.generateUniqid() + "gelu";
    editLastName = await I.generateUniqid() + "gelu";
    editDate = "2021-12-22";
    editEmail = "test" + I.generateUniqid() + "@example.com";
});

AfterSuite(({I}) => {

});
/**
 * This scenario checks the positive test cases of the main functionality
 */
Scenario('test create edit and remove employee functionality', ({ I, employeeListPage }) => {
    I.loginAs(soleUser, password);
    I.checkLoggedInAs(soleUser);

    employeeListPage.createNewEmployee();
    employeeListPage.fillEmployeeInfo(firstName, lastName, date, email);
    employeeListPage.validateAddOrEditedEmployee(editFirstName, editLastName);

    employeeListPage.editEmployeeInfo(firstName, lastName, editFirstName, editLastName, editDate, editEmail);
    employeeListPage.validateAddOrEditedEmployee(editFirstName, editLastName);

    employeeListPage.deleteEmployee(editFirstName, editLastName);
    employeeListPage.validateEmployeeRemoval(editFirstName, editLastName);
});


