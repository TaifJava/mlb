Feature: Settings
  As a MLB app user
  I would like to see Settings feature

  Background:
    Given I visit "/"
    Then I see "MLB.TV on Web" in the title
    When I select a favorite team with text "Cleveland Indians"
    And I click next
    And I click an element with text "Log In"
    When I type "tvyearly@gmail.com" in email
    And I type "Password1" in password
    Then I navigate down and press enter
    And I should see "Successful Log In" as Login success message
    When I click element with text "Get Started" and locator ".mlb-login-get-started-button"
    Then I should see "Home tab" in "Home page" is displayed with locator "#home-link"

  Scenario: Verify Settings
    When I navigate to Settings

