Feature('EmployeeOperations');

let soleUser;
let password;
let firstName, lastName, date, email;
let editFirstName, editLastName, editDate, editEmail;



BeforeSuite(async ({I}) => {
    soleUser = "Luke";
    password = "Skywalker";
    firstName = I.generateUniqid() + "Testing";
    lastName = I.generateUniqid() + "Testerson";
    date = "2021-12-11";
    email = "test" + I.generateUniqid() + "@example.com";
    editFirstName = I.generateUniqid() + "tester";
    editLastName = I.generateUniqid() + "testsAlot";
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
    employeeListPage.validateAddOrEditedEmployee(firstName, lastName);

    employeeListPage.editEmployeeInfo(firstName, lastName, editFirstName, editLastName, editDate, editEmail);
    employeeListPage.validateAddOrEditedEmployee(editFirstName, editLastName);

    employeeListPage.deleteEmployee(editFirstName, editLastName);
    employeeListPage.validateEmployeeRemoval(editFirstName, editLastName);
});


