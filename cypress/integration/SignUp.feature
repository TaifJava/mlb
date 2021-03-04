Feature: Creating New Account 
  As a MLB app user
  I would like to Sign Up

  Background:
    Given I visit "/"
    Then I see "MLB.TV on Web" in the title
    When I select a favorite team with text "Cleveland Indians"
    And I click next

  Scenario: Signing Up for new account on MLB App
    When I land on "Create Account" tile on "Welcome Page"
    And I press enter on "Get Started" button
    Then I land on Free MLB account tile in paywall page
    Then I press enter since I am already on "Continue" button
    And Land on page title "Create a free MLB account..." on Email input field
    # Then I hit enter and input Email
    # And Input "" as password
    # Then I Press button "Create Account" in bottom of page
