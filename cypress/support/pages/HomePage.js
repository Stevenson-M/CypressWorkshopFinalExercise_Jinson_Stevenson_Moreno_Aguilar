import NavbarHeaderModule from './modules/NavbarHeaderModule.js'

var pageLocators = {
    carousel: ".carousel-inner",
    leftCarouselArrow: "a.carousel-control-prev",
    rightCarouselArrow: "a.carousel-control-next",
    carouselImagesIndicators: "ol.carousel-indicators li",
    carouselImagesIndicatorsActive: "ol li.active",
    categories: '.list-group-item[href="#"]',
    categoriesTable: ".list-group",
    firstProductCard: ":nth-child(1) > .card > .card-block > .card-title > .hrefch",
}

class HomePage {

    constructor() {
        this.navbarHeaderModule = new NavbarHeaderModule()
    }


    getCarousel() { return cy.get(pageLocators.carousel) }

    getCarouselImagesIndicators() { return cy.get(pageLocators.carouselImagesIndicators) }

    getLeftCarouselArrow() { return cy.get(pageLocators.leftCarouselArrow) }

    getRightCarouselArrow() { return cy.get(pageLocators.rightCarouselArrow) }

    getCarouselImagesIndicatorsActive() { return cy.get(pageLocators.carouselImagesIndicatorsActive) }

    getNavbar() { return this.navbarHeaderModule.getNavbar() }

    getContactModal() { return this.navbarHeaderModule.getContactModal() }

    getAboutUsModal() { return this.navbarHeaderModule.getAboutUsModal() }

    getLogInModal() { return this.navbarHeaderModule.getLogInModal() }

    getSingUpModal() { return this.navbarHeaderModule.getSingUpModal() }

    getCategoriesTable() { return cy.get(pageLocators.categoriesTable) }

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
        return this.navbarHeaderModule.getContactButton().click()
    }

    checkContactModalTitle() {
        return this.navbarHeaderModule.getContactModalTitle().invoke('text')
    }

    clickAboutUsButton() {
        return this.navbarHeaderModule.getAboutUsButton().click()
    }

    checkAboutUsModalTitle() {
        return this.navbarHeaderModule.getAboutUsModalTitle().invoke('text')
    }

    clickCartButton() {
        return this.navbarHeaderModule.getCartButton().click()
    }

    checkUrl(url) {
        return cy.url().should('include', url);
    }

    checkUrlStatus(url) {
        return cy.request(url).its('status')
    }

    clickLogInButton() {
        return this.navbarHeaderModule.getLogInButton().click()
    }

    checkLogInModalTitle() {
        return this.navbarHeaderModule.getLogInModalTitle().invoke('text')
    }

    clickSingUpButton() {
        return this.navbarHeaderModule.getSingUpButton().click()
    }

    checkSingUpModalTitle() {
        return this.navbarHeaderModule.getSingUpModalTitle().invoke('text')
    }
    
    getCategoriesTableText(index) {
        return this.getCategoriesTable().find('.list-group-item').eq(index).invoke('text')
    }

    clickCategoriesTable(index) {
        return this.getCategoriesTable().find('.list-group-item').eq(index).click()
    }

    clickOnCategoty(index) {
        cy.fixture('productsEndpoint').as('categoriesUrl');
        cy.get("@categoriesUrl").then(categoriesUrl => {
            cy.intercept('POST', categoriesUrl.categories).as('categoriesResponse');
        });
        return this.clickCategoriesTable(index)
    }

    getCategoriesResponse(cat) {
        let products = [];
        cy.wait('@categoriesResponse')
            .then(response => {
                products = response.response.body.Items;
            })
            .then(() => {
                cy.wrap(products).as('products');
            });

        return cy.get('@products').then((products) => {
            products.forEach(element => {
                cy.wrap(element.cat).should('eq', cat);
            });
        });
    }

    clickFirstProductCard() {
        return this.getFirstProductCard().click()
    }
}

export default HomePage;


