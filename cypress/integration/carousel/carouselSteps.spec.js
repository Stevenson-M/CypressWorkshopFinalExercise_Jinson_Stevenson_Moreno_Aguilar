import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
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

Then('I verify if the carousel is present', () => {
    homePage.getCarousel().should('be.visible')
})

Then('I verify if the items number of the carousel is equal to 3', () => {
    homePage.getCarouselImagesIndicators().should('have.length', 3)
})

When('I click in the left arrow of the carousel', () => {
    homePage.getLeftCarouselArrow().click()
})

Then('I verify if the carousel is moving to the left', () => {
    homePage.carouselActiveSlide().should('eq', '2')
})

When('I click in the right arrow of the carousel', () => {
    homePage.getRightCarouselArrow().click()
})

Then('I verify if the carousel is moving to the right', () => {
    homePage.carouselActiveSlide().should('eq', '1')
})




