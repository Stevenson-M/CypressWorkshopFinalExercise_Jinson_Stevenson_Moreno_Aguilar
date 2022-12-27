import NavbarHeaderModule from './modules/NavbarHeaderModule.js'

var pageLocators = {
    addToCartButton: ".col-sm-12 > .btn",
}

class ProductPage {

    constructor() {
        this.navbarHeaderModule =  new NavbarHeaderModule()
    }

    getAddToCartButton() { return cy.get(pageLocators.addToCartButton)}

    clickCartButton() {
        return this.navbarHeaderModule.getCartButton().click()
    }
    
    clickAddToCartButton() {
        return this.getAddToCartButton().click()
    }


}

export default ProductPage;