/// <reference types="Cypress" />
/**
 * Common steps for plain html elements go here
 */

// eslint-disable-next-line no-unused-vars

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { favorites } from '../pages/favorites'
import { home } from '../pages/home'
import { games } from '../pages/games'
import { login } from '../pages/login'

import 'cypress-wait-until';


require('cypress-xpath')


When('I select my favorite team with text {string}', team => {

  Cypress.config('defaultCommandTimeout', 25000);
  cy.get('body').type('{downarrow}')
cy.get('body').type('{downarrow}')
cy.get('body').type('{rightarrow}')
cy.xpath(favorites.favoriteTeam2).click()
cy.pause(2500)
Cypress.config('defaultCommandTimeout', 5000);
  cy.xpath(favorites.favoriteTeam2).click()

  
})

When('I click next', () => {
  cy.pause(2500)
  cy.get(favorites.next).click()
  
})

When('I click an element with text {string}', buttonText => {
  cy.get('.mlb-onboarding-tile-label').contains(buttonText).click()
  
})

When('I type {string} in email', email => {
  cy.get(login.email).type(email)
})

When('I type {string} in password', password => {
  cy.get(login.password).type(password)
})

Then('I navigate down and press enter', () => {

  cy.get('body').type('{downarrow}')
    cy.get('body').type('{enter}')
    cy.pause(2500)
})

And('I should see "Successful Log In" as Login success message', () => {
  cy.pause(5000)

  cy.get(login.successMessage).should('contain',successMessage)
  cy.pause(5000)
}
 )