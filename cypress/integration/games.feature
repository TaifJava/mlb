Feature: Games
  As a MLB app user
  I would like to see Games feature

  Background:
    Given I visit "/"
    Then I see "MLB.TV on Web" in the title

  Scenario: Verify Games
    When I select my favorite team with text "Cleveland Indians"
    And I click next
    And I click an element with text "Continue"
    When I navigate to Games
    Then I should see Calendar date picker is displayed
    And I should see Calendar previous arrow is displayed
    And I should see Calendar next arrow is displayed
    And I should see game score tile label is displayed
    And I should see game score tile logo is displayed
    When I click first game score tile
    Then I should see feed select modal is displayed
    When I click anywhere in the page except feed modal
    #Then I should see feed select modal is not displayed
    
    




