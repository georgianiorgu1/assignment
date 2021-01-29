# Zivver CodeceptJS automation testing assignment

### Setup before running the tests
1. Clone the project
2. Make sure you have the following installed :
- `jdk` installed and env variable added
- `nodejs` installed and npm env variable added

3. Run `npm install` in the root directory
4. To run tests enter the following command locally:
```
- To run all tests 
codeceptjs run --debug
or  
npx codeceptjs run --plugins allure

- To run only a specific test e.g. EmployeeOperations test
codeceptjs run --debug --grep "Employee"

- To generate allure reports after test runs run the command below
allure serve acceptance/tests/output

```

Optional things to be installed if you choose to have selenium running locally:

1. npm install uniqid --save-dev
2. selenium-standalone install
3. selenium-standalone start

### Official documentation of this testing framework

https://codecept.io/  
