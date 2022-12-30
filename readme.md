# Cypress Workshop Final Excersie

## Description: 

In this project, automated tests are carried out on the web application https://www.demoblaze.com/ using Cypress(9.7.0) and Allure report.

* The project contemplates three test scenarios:
      
      1. Carousel test.
      2. Navbar test.
      3. Products and shoppin cart test.

### Prerequisites

[Node.js](https://nodejs.org/en/ "Node.js") minimum in its verse 16 is necessary to be able to run the project. Version 18.2.1 was used during the implementation of the project.

### Scripts

The neccesary scripts to run the tests are in the folder `cypress/package.json`.

* The scripts are: 
       
   *  ` npm run open`: Run the project by using Cypress interface.
    
   * `npx cypress run`: Run the project in a headless mode.
      
   * `npx cypress run --env allure=true`: Run the project in a headless mode by  using Allure Framework as the reporter.
    
   * `allure serve allure-results/`: Open Allure reports that were previously generated.
    
   * `npm run tag`: Run the project in a headless mode. The tag must be modified to the desired one.


### Setup 
      1.Download/clone the project. 
      2.Run command npm install.
      3.Run one of the indicated scripts.

    

## Architecture Diagram:

![Alt text](architecture_diagram/Architecture%20Diagram.png)
 
## Notes
  * Cypress version `9.7.0` .
  * Cucumber was used to write the tests in conjunction with the POM design pattern.
  * Tests are located inside the folder  `cypress/integration`. 
  * `cypress/fixtures` Contains data used throughout the framework.
  * The neccesary scripts to run the tests are in the folder `cypress/package.json`.
  
##  Resources

* [Node.js](https://nodejs.org/en/ "Node.js")
* [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress "Cypress Documentation")
* [Cucumber Documentation](https://cucumber.io/ "Cucumber Documentation")
* [Allure Documentation](https://docs.qameta.io/allure/ "Allure Documentation")
