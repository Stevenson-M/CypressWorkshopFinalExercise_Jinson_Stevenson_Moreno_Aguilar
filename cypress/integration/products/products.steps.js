import { When, Then, And } from "cypress-cucumber-preprocessor/steps"
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

And('I add the product to the cart', () => {
    productPage.clickAddToCartButton();
    productPage.clickCartButton();
})

Then('I verify that the product is added to the cart successfully', () => {
    cartPage.getCartTableCount().should('eq', 1)
})

When('I put a product in my shopping cart', () => {
    homePage.clickFirstProductCard();
    productPage.clickAddToCartButton();
    productPage.clickAddToCartButton();
    productPage.clickCartButton();
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

And('I delete the product from the cart', () => {

})

Then('I verify that the product is deleted from the cart successfully', () => {
    cartPage.getCartTableCount().should('eq', 2)
})