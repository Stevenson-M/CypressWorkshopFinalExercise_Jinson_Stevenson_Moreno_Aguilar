@products

Feature: Products check

    As an user I'm gonna check if actions related to the products works as expected

    Background:
        Given I am on the main page of the demoblaze page

@regression @smoke @products @productsCategoryTable
    Scenario: Check if categories table is present
        Then I verify that the categories table is present

@regression @smoke @products @productsCategoryTable
    Scenario: Check if the categories tab has the correct items
        Then I verify that the categories tab has the correct items

@regression @smoke @products @phonesCategory
    Scenario: check API phones category respose
        When I click on phones category
        Then I verify that the API response for phones is correct

@regression @smoke @products @laptopsCategory
    Scenario: check API laptops category respose
        When I click on laptops category
        Then I verify that the API response for laptops is correct

@regression @smoke @products @monitorsCategory
    Scenario: check API monitors category respose
        When I click on monitors category
        Then I verify that the API response for monitors is correct

@regression @smoke @products @productsAddToCart
    Scenario: Check adding a product to the cart process
        When I click in a product
        And I add a product to the cart
        Then I verify that the product is added to the cart

@regression @smoke @products @buyCartProcess
    Scenario: Check buying cart process
        Given I am on the shopping cart page
        When I put a product in my shopping cart
        And I buy the product
        Then I verify that i can see the green check mark in the confirmation purchase modal

@regression @smoke @products @deleteCartProductProcess
    Scenario: Check deleting a product from the cart process
        Given I am on the shopping cart page
        When I put a product in my shopping cart
        And I delete the product from the cart
        Then I verify that the cart is empty