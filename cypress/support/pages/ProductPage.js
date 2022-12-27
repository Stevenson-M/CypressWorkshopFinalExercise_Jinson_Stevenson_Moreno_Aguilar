var pageLocators = {
    addToCartButton: ".col-sm-12 > .btn",
}

class ProductPage {
    getAddToCartButton() { return cy.get(pageLocators.addToCartButton)}

    clickAddToCartButton() {
        return this.getAddToCartButton().click()
    }
}

export default ProductPage;