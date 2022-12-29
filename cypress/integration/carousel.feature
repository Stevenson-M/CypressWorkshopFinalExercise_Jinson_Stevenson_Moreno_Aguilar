@carousel

Feature: Carousel check

    As an user I'm gonna check if the carousel of the Main Page works

    Background:
        Given I am on the main page of the demoblaze page

@regression @sanity @carousel  
    Scenario: verify carousel is present
        Then I verify if the carousel is present

@regression @sanity @carousel @carouselItemsNumber
    Scenario: verify items number on carousel
        Then  I verify if the items number of the carousel is equal to 3

@regression @sanity @carousel @carouselLeftArrow
    Scenario: check left arrow's functionality
        When I click in the left arrow of the carousel
        Then I verify if the carousel is moving to the left

@regression @sanity @carousel @carouselRightArrow
    Scenario: check right arrow's functionality
        When I click in the right arrow of the carousel
        Then I verify if the carousel is moving to the right