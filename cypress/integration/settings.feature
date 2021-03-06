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
    Then I should see "Game tab" in "Home page" is displayed with locator "#games-link"


  Scenario: Verify Settings
    When I navigate to Settings
    #And I hover to an element "Logout" with locator "[aria-label^='Log Out']"
    Then I verify an element with text "Favorite Team" and locator "//button[contains(@aria-label,'Favorite Team')]//span"
    When I hover to an element "Log Out" with locator "//button[contains(@aria-label,'Log Out')]//span"
    Then I should see text "Logged in as:" in element ".mlb-settings-info-text"
    When I hover to an element "Favorite Team" with locator "//button[contains(@aria-label,'Favorite Team')]//span"
    Then I should see text "Select your favorite team" in element ".mlb-settings-info-text"
    When I hover to an element "Following Team" with locator "//button[contains(@aria-label,'Following Team')]//span"
    Then I should see text "Select teams to follow" in element ".mlb-settings-info-text"
    When I hover to an element "Hide Spoilers" with locator "//button[contains(@aria-label,'Hide Spoilers')]//span"
    Then I should see text "Scores can be hidden for live" in element ".mlb-settings-info-text"
    When I hover to an element "Autoplay Live Featured Game" with locator "//button[contains(@aria-label,'Autoplay Live Featured Game')]//span"
    Then I should see text "Enable Autoplay to automatically stream live games on the Home page" in element ".mlb-settings-info-text"
    When I hover to an element "Terms of Service and Privacy Policy" with locator "//button[contains(@aria-label,'Terms of Service and Privacy Policy')]//span"
    When I hover to an element "Contact Support" with locator "//button[contains(@aria-label,'Contact Support')]//span"

    #Then I should see "Settings tab" in "Settings page" is displayed with locator "#settings-link"
    #And while on "Log Out" button in "Settings page" I see user email on left with locator ".mlb-settings-info-text"
    #Then I navigate to "Favorite Team" button with locator ".mlb-settings-info-text"
    # When I navigate to "Following Team" button with locator ".mlb-settings-info-text"
    # Then I navigate to "Hide Spoilers" button with locator ".mlb-settings-info-text"
    # And I can turn "Hide Spoilers" On
    # And I can turn "Hide Spoilers" Off
    # Then I navigate to "Autoplay Live Featured Game"
    # And I can turn "Autoplay Live Featured Game" On
    # And I can turn "Autoplay Live Featured Game" Off
    # Then I go to "Closed Caption" button with locator ".mlb-settings-info-text"
    # And I can turn "Closed Caption" On
    # And I can turn "Closed Caption" Off
    # Then I navigate to "Terms of Service and Privacy Policy" button with locator ".mlb-settings-info-text"
    # Then I navigate to "Contact Support" button with locator ".mlb-settings-info-text"



