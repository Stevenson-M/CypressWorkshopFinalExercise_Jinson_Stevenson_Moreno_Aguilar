<em>Cypress Workshop Final Excersie<em>

Description: In this project we automate the web application https://www.demoblaze.com/ using Cypress and Allure report.

The project is divided into 3 parts:

1. carousel test
2. Navbar test
3. Products and shoppin cart test

The scripts neccesary to run the tests are in the folder cypress\package.json

The scripts are:
"test": "npx cypress run": This open the cypress test view an allow to run the tests
"allure": "npx cypress run --env allure=true" : This run the tests and generate the allure report
"allure:results": "allure serve allure-results/": This open the allure report

Architecture Diagram:

