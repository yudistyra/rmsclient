Feature: Go to the login page
   Display the title

   Scenario: Login Page
        Given I am on the login page
        When I do nothing
        Then I should see username field
        Then I should see password field