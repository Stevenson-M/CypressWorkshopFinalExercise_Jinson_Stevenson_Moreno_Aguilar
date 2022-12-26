var pageLocators = {
    carousel: ".carousel-inner",
    leftCarouselArrow: "a.carousel-control-prev",
    rightCarouselArrow: "a.carousel-control-next",
    carouselImagesIndicators: "ol.carousel-indicators li",
    carouselImagesIndicatorsActive: "ol li.active",

    navbar: "#navbarExample",
    carButton: "#cartur",

}


class HomePage {

    // -------------------Carousel ----------------------- //

    getCarousel() {
        return cy.get(pageLocators.carousel)
    }

    getCarouselImagesIndicators() {
        return cy.get(pageLocators.carouselImagesIndicators)
    }

    getLeftCarouselArrow() {
        return cy.get(pageLocators.leftCarouselArrow)
    }

    getRightCarouselArrow() {
        return cy.get(pageLocators.rightCarouselArrow)
    }


    getCarouselImagesIndicatorsActive() {
        return cy.get(pageLocators.carouselImagesIndicatorsActive)
    }
    // ---------------------------------------------------- //

    clickLeftArrow() {
        return this.getLeftCarouselArrow().click()
    }

    clickRightArrow() {
        return this.getRightCarouselArrow().click()
    }

    carouselActiveSlide() {
        return this.getCarouselImagesIndicatorsActive().invoke('attr', 'data-slide-to')
    }

    // -------------------Carousel ----------------------- //

    // -------------------Navbar ------------------------- //
    getNavbar() {
        return cy.get(pageLocators.navbar)
    }
    getCarButton() {
        return cy.get(pageLocators.carButton)
    }

        // ---------------------------------------------------- //

    getNavbarText(texto, entero) {
        return this.getNavbar().find('.nav-link').eq(entero).invoke('text').should('eq', texto)
    }

    clickCarButton() {
        return this.getCarButton().click()
    }

    checkUrl(url) {
        return cy.url().should('include', url)
    }
    // -------------------Navbar ------------------------- //
  

}

export default HomePage;


