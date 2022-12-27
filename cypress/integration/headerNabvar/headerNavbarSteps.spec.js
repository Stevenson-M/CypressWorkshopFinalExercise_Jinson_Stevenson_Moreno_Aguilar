import {When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/pages/HomePage'


const homePage = new HomePage();

Then('I verify that the navbar header is present', () => {
    homePage.getNavbar().should('be.visible')
})

Then("I verify that the navbar header has the correct items", () => {
    homePage.getNavbarText(0).should('eq', 'Home (current)')
    homePage.getNavbarText(1).should('eq', 'Contact')
    homePage.getNavbarText(2).should('eq', 'About us')
    homePage.getNavbarText(3).should('eq', 'Cart')
    homePage.getNavbarText(4).should('eq', 'Log in')
   
})

When('I click in the contact button in the navbar', () => {
    homePage.clickContactButton()
})

Then('I verify that the modal contact is present with the correct title', () => {
    homePage.getContactModal().should('be.visible')
    homePage.cheackContactModalTitle().should('eq', 'New message')

})

When('I click in the about us button in the navbar', () => {
    homePage.clickAboutUsButton()
})

Then('I verify that the modal about us is present with the correct title', () => {
    homePage.getAboutUsModal().should('be.visible')
    homePage.cheackAboutUsModalTitle().should('eq', 'About us')
})

When('I click in the car button in the navbar', () => {
    homePage.clickCartButton()
})

Then('I verify that the page is the cart page', () => {
    homePage.checkUrl('/cart.html')
})

When('I click in the log in button in the navbar', () => {
    homePage.clickLogInButton()
})

Then('I verify that the modal log in is present with the correct title', () => {
    homePage.getLogInModal().should('be.visible')
    homePage.cheackLogInModalTitle().should('eq', 'Log in')
})

When('I click in the sing up button in the navbar', () => {
    homePage.clickSingUpButton()
})

Then('I verify that the modal sing up is present with the correct title', () => {
    homePage.getSingUpModal().should('be.visible')
    homePage.cheackLogInModalTitle().should('eq', 'Log in')
})








