import NavbarHeaderModule from './modules/NavbarHeaderModule.js'

var pageLocators = {
    placeOrderButton: ".col-lg-1 > .btn",
    placeOrderModal: "#orderModal",
    nameInputOrderModal: "#name",
    countryInputOrderModal: "#country",
    cityInputOrderModal: "#city",
    creditCardInputOrderModal: "#card",
    monthInputOrderModal: "#month",
    yearInputOrderModal: "#year",
    purchaseButtonOrderModal: "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary",
    purchaseMessageOrderModal: ".sweet-alert",
    deleteProductButton: ".success > :nth-child(4) > a",
}

class CartPage {

    constructor() {
        this.navbarHeaderModule =  new NavbarHeaderModule()
    }

    getPlaceOrderButton() { return cy.get(pageLocators.placeOrderButton)}

    getPlaceOrderModal() { return cy.get(pageLocators.placeOrderModal)}

    getNameInputOrderModal() { return cy.get(pageLocators.nameInputOrderModal)}

    getCountryInputOrderModal() { return cy.get(pageLocators.countryInputOrderModal)}

    getCityInputOrderModal() { return cy.get(pageLocators.cityInputOrderModal) }

    getCreditCardInputOrderModal() { return cy.get(pageLocators.creditCardInputOrderModal)}

    getMonthInputOrderModal() { return cy.get(pageLocators.monthInputOrderModal)}

    getYearInputOrderModal() { return cy.get(pageLocators.yearInputOrderModal)}

    getPurchaseButtonOrderModal() { return cy.get(pageLocators.purchaseButtonOrderModal)}

    getPurchaseMessageOrderModal() { return cy.get((pageLocators.purchaseMessageOrderModal))}

    getDeleteProductButton() { return cy.get(pageLocators.deleteProductButton)}


    clickCartButton() {
        return this.navbarHeaderModule.getCartButton().click()
    }

    getProductsInShoppingCart(amount) {

        cy.fixture('productsEndpoint').as('productsEndpoint');

        cy.get("@productsEndpoint").then(products => {
            cy.intercept('POST', products.shoppingCartView).as('productsInShoppingCart');
        });

        let amountOfProductsInShoppingCart = [];

        cy.wait('@productsInShoppingCart')
        .then( response => {
            amountOfProductsInShoppingCart =  response.response.body.Items.length;
        })
        .then( () => {
            cy.wrap(amountOfProductsInShoppingCart).as('amountOfProductsInShoppingCart');
        })
        .then ( () => {
             cy.get('@amountOfProductsInShoppingCart').then( (productsInShoppingCartAmount) => {
             cy.wrap(productsInShoppingCartAmount).should('eq', amount)
            })
        })
    }

    clickPlaceOrderButton() {
        return this.getPlaceOrderButton().click()
    }

    fillNameField(name) {
        return this.getNameInputOrderModal().type(name)
    }

    fillCountryField(country) {
        return this.getCountryInputOrderModal().type(country)
    }

    fillCityField(city) {
        return this.getCityInputOrderModal().type(city)
    }

    fillCreditCardField(creditCard) {
        return this.getCreditCardInputOrderModal().type(creditCard)
    }

    fillMonthField(month) {
        return this.getMonthInputOrderModal().type(month)
    }

    fillYearField(year) {
        return this.getYearInputOrderModal().type(year)
    }

    clickPurchaseModalButton() {
        return this.getPurchaseButtonOrderModal().click()
    }

    checkOkPurchaseCheckImageOrderModal() {
        return this.getPurchaseMessageOrderModal().find('.sa-success')
    }

    clickDeleteProductButton() {
        return this.getDeleteProductButton().click()
    }
}

export default CartPage;