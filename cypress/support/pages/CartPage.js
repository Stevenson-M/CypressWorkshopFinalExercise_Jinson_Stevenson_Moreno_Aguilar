import NavbarHeaderModule from './modules/NavbarHeaderModule.js'

var pageLocators = {
    tabbleCart: ".col-lg-8",
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

    okPurchaseButtonOrderModal: ".confirm",
    deleteProductButton: ".success > :nth-child(4) > a",
}

class CartPage {

    constructor() {
        this.navbarHeaderModule =  new NavbarHeaderModule()
    }

    getTabbleCart() { return cy.get(pageLocators.tabbleCart)}

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

    getCartTableCount() {
        return this.getTabbleCart().find('#tbodyid').its('length')
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

    // checkOkPurchaseCheckTextOrderModal() {
    //     return this.getPurchaseMessageOrderModal().find('.sweet-overlay').find('.sweet-alert > h2')
    // }

    clickDeleteProductButton() {
        return this.getTabbleCart().find('.success > :nth-child(4) > a').click()
    }

    refreshPage() {
        return cy.reload()
    }
}

export default CartPage;