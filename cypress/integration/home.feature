Feature: Home
  As a MLB app user
  I would like to see Home feature

  Background:
    Given I visit "/home"
    Then I see "MLB.TV on Web" in the title

  Scenario: Verify Home
    Then I should see Games is displayed
    And I should see Login is displayed
    And I should see Get MLB.TV is displayed
    And I should see Settings is displayed
    And I should see Hero Tile Title is displayed
    And I should see Hero Tile Date is displayed
    And I should see Hero Tile Timestamp is displayed
    And I should see Hero Tile Watch now button is displayed
    And I should see Hero Tile Lock Icon is displayed
    When I scroll to Video Tile
    Then I should see "Most Popular" as Video Tile Title
    And I should see Video Tile Date is displayed
    And I should see Video Tile Duration is displayed
    And I should see Video Tile Image is displayed
    And I should see Video Tile Description is displayed
    When I scroll to SVOD Tile
    Then I should see "Featured on MLB.TV" as SVOD Tile Title
    And I should see SVOD Tile Date is displayed
    And I should see SVOD Tile Duration is displayed
    And I should see SVOD Tile Image is displayed
    And I should see SVOD Tile Description is displayed

