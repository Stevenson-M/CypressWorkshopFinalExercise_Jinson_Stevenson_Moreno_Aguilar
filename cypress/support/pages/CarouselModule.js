var pageLocators = {
    carousel:".carousel-inner",
    leftCarouselArrow: "a.carousel-control-prev",
    rightCarouselArrow: "a.carousel-control-next",
    carouselImagesIndicators: "ol.carousel-indicators li",
    carouselImagesIndicatorsActive: "ol li.active",

    navbar: "#navbarExample",
}

class CarouselModule {

    getCarousel() {
        return cy.get(pageLocators.carousel)
    }

    getLeftCarouselArrow() {
        return cy.get(pageLocators.leftCarouselArrow)
    }

    getRightCarouselArrow() {
        return cy.get(pageLocators.rightCarouselArrow)
    }

    getCarouselImagesIndicators() {
        return cy.get(pageLocators.carousel)
    }

    getCarouselImagesIndicatorsActive() {
        return cy.get(pageLocators.carouselImagesIndicatorsActive)
    }

}

export default CarouselModule;
