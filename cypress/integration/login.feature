Feature: Login
  As a MLB app user
  I would like to see Login feature

  Background:
    Given I visit "/"
    Then I see "MLB.TV on Web" in the title

  Scenario: Login
    When I select my favorite team with text "Cleveland Indians"
    And I click next
    And I click an element with text "Log In"
    When I type "tvyearly@gmail.com" in email
    And I type "Password1" in password
    #And I navigate down and press enter
    #Then I should see "Successful Log In" as Login success message

    
    




