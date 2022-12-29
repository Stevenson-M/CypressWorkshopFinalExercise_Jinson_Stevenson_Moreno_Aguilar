@navbar

Feature: Navbvar Header check

    As an user I'm gonna check if the Header navbar of the Main Page works correctly

    Background:
        Given I am on the main page of the demoblaze page

@regression @smoke @navbar
    Scenario: Check the navbar header
        Then I verify that the navbar header is present

@regression @smoke @navbar 
    Scenario: Check if the Header navbar has the correct items
        Then I verify that the navbar header has the correct items

@regression @smoke @navbar @contactButton
    Scenario: Check if the contact button in the navbar works
        When I click in the contact button in the navbar
        Then I verify that the modal contact is present with the correct title

@regression @smoke @navbar @aboutUsButton
    Scenario: Check if the about us button in the navbar works
        When I click in the about us button in the navbar
        Then I verify that the modal about us is present with the correct title

@regression @smoke @navbar @cartButton
    Scenario: Check if the car button in the navbar works
        When I click in the car button in the navbar
        Then I verify that the page is the cart page

@regression @smoke @navbar @logInButton
    Scenario: Check if the log in button in the navbar works
        When I click in the log in button in the navbar
        Then I verify that the modal log in is present with the correct title

@regression @smoke @navbar @singUpButton
    Scenario: Check if the sing up button in the navbar works
        When I click in the sing up button in the navbar
        Then I verify that the modal sing up is present with the correct title