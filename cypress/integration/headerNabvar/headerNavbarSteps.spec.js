import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/pages/HomePage'


const homePage = new HomePage();

Given('I am on the main page of the demoblaze page', () => {
    cy.visit('/')
})

Then("I verify if the page response is 200", () => {
    cy.request('/')
        .its('status')
        .should('eq', 200)
})

Then('I verify that the navbar header is present', () => {
    homePage.getNavbar().should('be.visible')
})

Then("I verify that the navbar header has the correct items", () => {
    homePage.getNavbarText('Home (current)', 0)
    homePage.getNavbarText('Contact', 1)
    homePage.getNavbarText('About us', 2)
    homePage.getNavbarText('Cart', 3)
    homePage.getNavbarText('Log in', 4)
    homePage.getNavbarText('Log out', 5)
})

When('I click in the car button in the navbar', () => {
    homePage.clickCarButton()
})

Then('I verify that the page is the cart page', () => {
    homePage.checkUrl('/cart.html')
})








