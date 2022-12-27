var pageLocators = {
    carousel: ".carousel-inner",
    leftCarouselArrow: "a.carousel-control-prev",
    rightCarouselArrow: "a.carousel-control-next",
    carouselImagesIndicators: "ol.carousel-indicators li",
    carouselImagesIndicatorsActive: "ol li.active",

    navbar: "#navbarExample",
    contactButton: "a[data-target='#exampleModal']",
    contactModal: "#exampleModal",
    contactModalTitle: "#exampleModalLabel",
    aboutUsButton: "a[data-target='#videoModal']",
    aboutUsModal: "#videoModal",
    aboutUsModalTitle: "#videoModalLabel",
    cartButton: "#cartur",
    logInButton: "#login2",
    logInModal: "#logInModal",
    logInModalTitle: "#logInModalLabel",
    singUpButton: "#signin2",
    singUpModal: "#signInModal",
    singUpModalTitle: "#signInModalLabel",

    categoriesTable: ".list-group",
    firstProductCard: ":nth-child(1) > .card > .card-block > .card-title > .hrefch",
}


class HomePage {

    getCarousel() { return cy.get(pageLocators.carousel) }

    getCarouselImagesIndicators() { return cy.get(pageLocators.carouselImagesIndicators)}

    getLeftCarouselArrow() { return cy.get(pageLocators.leftCarouselArrow)}

    getRightCarouselArrow() { return cy.get(pageLocators.rightCarouselArrow) }

    getCarouselImagesIndicatorsActive() { return cy.get(pageLocators.carouselImagesIndicatorsActive)}


    getNavbar() { return cy.get(pageLocators.navbar) }

    getContactButton() { return cy.get(pageLocators.contactButton) }

    getContactModal() { return cy.get(pageLocators.contactModal) }

    getContactModalTitle() { return cy.get(pageLocators.contactModalTitle) }

    getAboutUsButton() { return cy.get(pageLocators.aboutUsButton) }

    getAboutUsModal() { return cy.get(pageLocators.aboutUsModal) }

    getAboutUsModalTitle() { return cy.get(pageLocators.aboutUsModalTitle) }

    getCartButton() { return cy.get(pageLocators.cartButton) }

    getLogInButton() { return cy.get(pageLocators.logInButton) }

    getLogInModal() { return cy.get(pageLocators.logInModal)}

    getLogInModalTitle() { return cy.get(pageLocators.logInModalTitle) }

    getSingUpButton() { return cy.get(pageLocators.singUpButton) }

    getSingUpModal() { return cy.get(pageLocators.singUpModal) }

    getSingUpModalTitle() { return cy.get(pageLocators.singUpModalTitle) }

    
    getCategoriesTable() { return cy.get(pageLocators.categoriesTable)}

    getFirstProductCard() { return cy.get(pageLocators.firstProductCard) }
   

    clickLeftArrow() {
        return this.getLeftCarouselArrow().click()
    }

    clickRightArrow() {
        return this.getRightCarouselArrow().click()
    }

    carouselActiveSlide() {
        return this.getCarouselImagesIndicatorsActive().invoke('attr', 'data-slide-to')
    }


    getNavbarText(entero) {
        return this.getNavbar().find('.nav-link').eq(entero).invoke('text')
    }

    clickContactButton() {
        return this.getContactButton().click()
    }

    cheackContactModalTitle() {
        return this.getContactModalTitle().invoke('text')
    }

    clickAboutUsButton() {
        return this.getAboutUsButton().click()
    }

    cheackAboutUsModalTitle() {
        return this.getAboutUsModalTitle().invoke('text')
    }

    clickCartButton() {
        return this.getCartButton().click()
    }

    checkUrl(url) {
        return cy.url().should('include', url)
    }

    clickLogInButton() {
        return this.getLogInButton().click()
    }

    cheackLogInModalTitle() {
        return this.getLogInModalTitle().invoke('text')
    }

    clickSingUpButton() {
        return this.getSingUpButton().click()
    }

    cheackSingUpModalTitle() {
        return this.getSingUpModalTitle().invoke('text')
    }


    getCategoriesTableText(entero) {
        return this.getCategoriesTable().find('.list-group-item').eq(entero).invoke('text')
    }

    clickFirstProductCard() {
        return this.getFirstProductCard().click()
    }
}

export default HomePage;


