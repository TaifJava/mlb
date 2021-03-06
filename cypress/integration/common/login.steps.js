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


// When('I select my favorite team with text {string}', team => {

//   Cypress.config('defaultCommandTimeout', 25000);
//   cy.get('body').type('{downarrow}')
//   cy.get('body').type('{downarrow}')
//   cy.get('body').type('{rightarrow}')
//   cy.xpath(favorites.favoriteTeam2).click()
//   cy.pause(2500)
//   Cypress.config('defaultCommandTimeout', 5000);
//   cy.xpath(favorites.favoriteTeam2).click()
// })

When('I select a favorite team with text {string}', teamname => {
  cy.get('.mlb-favorites-team-name', { timeout: 10000 }).contains(teamname).click()
  
  // cy.get(".mlb-favorites-team-name").then(function($elem) {
  //   console.log($elem.text())
  // })
  
})

When('I click next', () => {
  cy.pause(3000)
  cy.get(favorites.next).click()
  
})

When('I click an element with text {string}', buttonText => {
  cy.get('.mlb-onboarding-tile-label').contains(buttonText).click() 
})

When('I click element with text {string} and locator {string}', (btnText,locator) => {
  cy.get(locator, { timeout: 10000 }).contains(btnText).click() 
})

Then('I verify an element with text {string} and locator {string}', (btnText,locator) => {
  cy.xpath(locator, { timeout: 10000 }).contains(btnText).should('be.visible') 
})

When('I click element in {string} with locator {string}', (page, locator) => {
  cy.get(locator, { timeout: 10000 }).click() 
})

When('I type {string} in email', email => {
  cy.get(login.email).type(email)
})

When('I type {string} in password', password => {
  cy.get(login.password).type(password)
})

Then('I should see {string} in {string} is displayed with locator {string}', (eleName, page, locator) => {
  cy.get(locator, { timeout: 20000 }).should('be.visible')
})

Then('I should see {string} in {string} is displayed with xpathlocator {string}', (eleName, page, locator) => {
  cy.xpath(locator, { timeout: 20000 }).should('be.visible')
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
})