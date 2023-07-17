# E2E Test Automation Framework using TestCafe
## Overview of Tests
E2E tests Framework written in [Testcafe](https://github.com/DevExpress/testcafe).
- Design Pattern: Page Object Model
- Language: Typescript
- Reporting: HTML and JSON Reports

## Setup
1. Clone `https://github.com/KarthikBalakrishnan88/e2e-test-automation-abn.git`
2. Install `npm install` (if you run into dependency issue use `npm install --legacy-peer-deps`)

## Dependencies
1. [Testcafe](https://www.npmjs.com/package/testcafe)
2. [dotenv](https://www.npmjs.com/package/dotenv)
3. [testcafe-reporter-cucumber-json](https://www.npmjs.com/package/testcafe-reporter-cucumber-json)
4. [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

## Execute tests
* Start the test application using `npm run start-server`
* Open a new terminal on your machine
* Run all tests in chrome with report `npm run regression` (if you wish to run them in concurrent use `npm run regression-parallel` but the HTML reporting is not available in this mode)
* To generate the HTML Report `npm run report`

## Report
* The report is generated in HTML format
* The failures are highlighted
[Alt text](/test/docs/htmlReport.png?raw=true "Sample Report")
* A screen shot is provided for better analysis
[Alt text](/test/docs/failedScenario.png?raw=true "Failed Scenario")

## Execute tests in CICD
To execute the tests on Azure, use [`azure-pipelines.yml`](azure-pipelines.yml) file from the repository and follow the [official guide](https://testcafe.io/documentation/402822/guides/continuous-integration/azure-devops) from test cafe to launch you pipeline