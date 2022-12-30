import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the main page of the demoblaze page', () => {
    cy.visit('/');
});
