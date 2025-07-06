Feature: Orange HRM Login Feature

    Scenario: user should be able to login
        Given I open the Orange HRM application
        When I enter Admin as username
        When I enter admin1234 as password
        Then I click on the login button