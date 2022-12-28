import {When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/pages/HomePage'


const homePage = new HomePage();

Then('I verify that the navbar header is present', () => {
    homePage.getNavbar().should('be.visible')
})