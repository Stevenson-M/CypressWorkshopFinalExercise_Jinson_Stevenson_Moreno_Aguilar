Feature: Carousel check

    As an user I'm gonna check if things related to the products works as expected

    Background:
        Given I am on the main page of the demoblaze page
        Then I verify if the page response is 200

    Scenario: Check if categories table is present
        Then I verify that the categories table is present

    Scenario: Check if the categories tab has the correct items
        Then I verify that the categories tab has the correct items

    # Scenario: Check if the products section con apis

    Scenario: Check adding a product to the cart process
        When I click in a product
        And I add the product to the cart
        Then I verify that the product is added to the cart successfully

    Scenario: Check buying cart process
        When I put a product in my shopping cart
        Then I verify that i can buy the products in the cart successfully

