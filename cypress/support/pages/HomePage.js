var pageLocators = {
    carousel:".carousel-inner",
    leftCarouselArrow: "a.carousel-control-prev",
    rightCarouselArrow: "a.carousel-control-next",
    carouselImagesIndicators: "ol.carousel-indicators li",
    carouselImagesIndicatorsActive: "ol li.active",

}


class HomePage {

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

    

    clickLeftArrow() {
        return this.getLeftCarouselArrow().click()       
    }

    clickRightArrow() {
        return this.getRightCarouselArrow().click()
    }

    carouselActiveSlide(){
        return this.getCarouselImagesIndicatorsActive().invoke('attr','data-slide-to')
    }



    

    
}

export default HomePage;

