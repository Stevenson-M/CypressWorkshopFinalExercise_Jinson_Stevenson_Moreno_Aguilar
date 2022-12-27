import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the main page of the demoblaze page', () => {
    cy.visit('/');
});

Then("I verify if the page response is 200", () => {
    cy.request('/')
        .its('status')
        .should('eq', 200)
})