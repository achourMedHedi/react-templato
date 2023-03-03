Feature: Logging in

Scenario: Entering a correct passwords
    Given I have previously created a password
    When I enter my password correctly
    Then I should be granted access
