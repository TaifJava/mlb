Feature: Settings
  As a MLB app user
  I would like to see Home feature

  Background:
    Given I visit "/home"
    Then I see "MLB.TV on Web" in the title

  Scenario: Verify Home
    When I navigate to Settings

