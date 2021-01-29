/// <reference types='codeceptjs' />
type steps_file = typeof import('./acceptance/tests/steps_file.js');
type employeeListPage = typeof import('./acceptance/tests/pages/EmployeeList.js');
type loginPage = typeof import('./acceptance/tests/pages/Login.js');
type commonStep = typeof import('./steps/common.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, employeeListPage: employeeListPage, loginPage: loginPage, commonStep: commonStep }
  interface Methods extends Protractor {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
