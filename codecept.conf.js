const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './acceptance/tests/*_test.js',
  output: './acceptance/tests/output',
  helpers: {
    Protractor: {
      url: 'http://cafetownsend-angular-rails.herokuapp.com/login',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: false
    },
  },
  include: {
    I: './acceptance/tests/steps_file.js',
    employeeListPage: './acceptance/tests/pages/EmployeeList.js',
    loginPage: './acceptance/tests/pages/Login.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'ZivverAssignment',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
  allure: {
    enabled: false
  }
  }
}