Feature: Simple Test

    Scenario: Just a test
        Given I open the website
        When I enter my username "admin" and password "password"
        And I click the login button
        Then I should be logged in