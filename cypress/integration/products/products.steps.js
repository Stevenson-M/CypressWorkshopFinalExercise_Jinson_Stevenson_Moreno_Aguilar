import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/pages/HomePage';
import ProductPage from "../../support/pages/ProductPage";
import CartPage from "../../support/pages/CartPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

Then('I verify that the categories table is present', () => {
    homePage.getCategoriesTable().should('be.visible')
})

Then('I verify that the categories tab has the correct items', () => {
    homePage.getCategoriesTableText(0).should('eq', 'CATEGORIES')
    homePage.getCategoriesTableText(1).should('eq', 'Phones')
    homePage.getCategoriesTableText(2).should('eq', 'Laptops')
    homePage.getCategoriesTableText(3).should('eq', 'Monitors')
})

When('I click on phones category', () => {
    homePage.clickOnCategoty(1);
});

Then('I verify that the API response for phones is correct', () => {
    homePage.getCategoriesResponse('phone');
})

When('I click on laptops category', () => {
    homePage.clickOnCategoty(2);
});

Then('I verify that the API response for laptops is correct', () => {
    homePage.getCategoriesResponse('notebook');
})

When('I click on monitors category', () => {
    homePage.clickOnCategoty(3);
});

Then('I verify that the API response for monitors is correct', () => {
    homePage.getCategoriesResponse('monitor');
    
})

When('I click in a product', () => {
    homePage.clickFirstProductCard()
})

And('I add a product to the cart', () => {
    productPage.clickAddToCartButton();
    productPage.clickCartButton();
})

Then('I verify that the product is added to the cart', () => {
    cartPage.getProductsInShoppingCart(1)
})

Given('I am on the shopping cart page', () => {
    homePage.clickFirstProductCard();
})

When('I put a product in my shopping cart', () => {
    productPage.clickAddToCartButton();
    productPage.clickCartButton();
})

And('I buy the product', () => {
    cy.fixture('cartFormData').then( cartFormData => {
        cartPage.clickPlaceOrderButton();
        cartPage.fillNameField(cartFormData.name);
        cartPage.fillCountryField(cartFormData.country);
        cartPage.fillCityField(cartFormData.city);
        cartPage.fillCreditCardField(cartFormData.creditCard);
        cartPage.fillMonthField(cartFormData.month);
        cartPage.fillYearField(cartFormData.year);
        cartPage.clickPurchaseModalButton();
    });
})

Then('I verify that i can see the green check mark in the confirmation purchase modal', () => {
    cartPage.checkOkPurchaseCheckImageOrderModal().should('be.visible')
})

And('I delete the product from the cart', () => {
    cartPage.clickDeleteProductButton();    
})

Then('I verify that the cart is empty', () => {
    cartPage.getProductsInShoppingCart(0)
})