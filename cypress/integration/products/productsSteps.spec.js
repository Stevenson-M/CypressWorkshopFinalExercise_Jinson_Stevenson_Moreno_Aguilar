import {When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/pages/HomePage';
import ProductPage from "../../support/pages/ProductPage";
import CartPage from "../../support/pages/CartPage";


const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

When('I click in a product', () => {
    homePage.clickFirstProductCard()
})

And('I add the product to the cart', () => {
    productPage.clickAddToCartButton();
    homePage.clickCartButton();
})

Then('I verify that the product is added to the cart successfully', () => {
    cartPage.getCartTableCount().should('eq', 1)
})

When('I put a product in my shopping cart', () => {
    homePage.clickFirstProductCard();
    productPage.clickAddToCartButton();
    homePage.clickCartButton();
})

Then('I verify that i can buy the products in the cart successfully', () => {
    cartPage.clickPlaceOrderButton();
    cartPage.fillNameField('Test');
    cartPage.fillCountryField('Colombia');
    cartPage.fillCityField('Test');
    cartPage.fillCreditCardField('123456789');
    cartPage.fillMonthField('12');
    cartPage.fillYearField('2021');
    cartPage.clickPurchaseModalButton();

    cartPage.checkOkPurchaseCheckImageOrderModal().should('be.visible')
    cartPage.checkOkPurchaseCheckTextOrderModal().should('be.visible')
    
})