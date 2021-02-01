const { I } = inject();

module.exports = {

    elements: {
        createBtn: 'a#bAdd.subButton',
        editBtn: 'a#bEdit.subButton',
        updateBtn: 'body > div > div > div > form > fieldset > div > button:nth-child(1)',
        deleteBtn: 'a#bDelete.subButton',
        firstEntryInTable: 'ul#employee-list > li:first-child',
        allRows: 'ul#employee-list > li',
        firstName: 'fieldset > label:nth-child(3) > input',
        lastName: 'fieldset > label:nth-child(4) > input',
        startDate: 'fieldset > label:nth-child(5) > input',
        email: 'fieldset > label:nth-child(6) > input',
        listEntry:'//li[contains(.,"%s")]',
        inputClassName: 'ng-pristine ng-invalid ng-invalid-required'
    },
    createNewEmployee: function () {
        I.waitForVisible("ul#employee-list", 20)
        I.click(this.elements.createBtn);
        I.waitInUrl("employees/new")
        I.waitForVisible(this.elements.firstName, 10);
    },

    fillEmployeeInfo: function (firstName, lastName, startDate, email) {
        I.fillField(this.elements.firstName, firstName);
        I.fillField(this.elements.lastName, lastName);
        I.fillField(this.elements.startDate, startDate);
        I.fillField(this.elements.email, email);
        I.click('button[type="submit"].main-button:nth-child(2)');
    },

    editEmployeeInfo: function (initialFirstName, initialLastName, firstName, lastName, startDate, email) {
        I.waitForVisible(this.elements.firstEntryInTable, 30)
        I.scrollTo(this.elements.listEntry.replace("%s", initialFirstName + " " + initialLastName), 0, 0)
        I.click(this.elements.listEntry.replace("%s", initialFirstName + " " + initialLastName));

        I.click(this.elements.editBtn);
        I.waitForVisible(this.elements.firstName, 30);

        I.clearField(this.elements.firstName);
        I.fillField(this.elements.firstName, firstName);
        I.clearField(this.elements.lastName);
        I.fillField(this.elements.lastName, lastName);
        I.clearField(this.elements.startDate);
        I.fillField(this.elements.startDate, startDate);
        I.clearField(this.elements.email);
        I.fillField(this.elements.email, email);
        I.click(this.elements.updateBtn);
    },

    validateAddOrEditedEmployee(firstName, lastName){
        I.waitForVisible(this.elements.firstEntryInTable, 30)
        I.scrollTo(this.elements.listEntry.replace("%s", firstName + " " + lastName), 0, 0);
        I.seeElement(this.elements.listEntry.replace("%s", firstName + " " + lastName));
    },

    deleteEmployee(firstName, lastName){
        I.scrollTo(this.elements.listEntry.replace("%s", firstName + " " + lastName), 0, 0);
        I.seeElement(this.elements.listEntry.replace("%s", firstName + " " + lastName));
        I.click(this.elements.listEntry.replace("%s", firstName + " " + lastName));
        I.click(this.elements.deleteBtn);
        I.acceptPopup();
    },

    validateEmployeeRemoval(firstName, lastName){

        I.moveCursorTo(this.elements.listEntry.replace("%s", firstName + " " + lastName));
        I.waitForInvisible(this.elements.listEntry.replace("%s", firstName + " " + lastName), 30);
        I.dontSeeElement(this.elements.listEntry.replace("%s", firstName + " " + lastName));

    }

}
