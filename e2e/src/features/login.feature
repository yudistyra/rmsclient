Feature: User Authentication
   Authenticate user and redirect user to home page

   Scenario: User login successfully
        Given I am on the login page
        When I fill username with "admin"
        When I fill password with "123456"
        When I click on the button login
        Then I should be redirected on "Home"