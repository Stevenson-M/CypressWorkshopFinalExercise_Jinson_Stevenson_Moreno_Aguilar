Feature: Header check

    As an user I'm gonna check if the Header navbar of the Main Page works

    Background:
        Given I am on the main page of the demoblaze page
        Then I verify if the page response is 200

    Scenario: Check the navbar header
        Then I verify that the navbar header is present

    Scenario: Check if the Header navbar has the correct items
        Then I verify that the navbar header has the correct items

    Scenario: Check if the car button in the navbar works
        When I click in the car button in the navbar
        Then I verify that the page is the cart page

