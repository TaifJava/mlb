/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



import 'cypress-wait-until';


require('cypress-xpath')

When('I navigate to Settings', () => {
  cy.get('body').type('{uparrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
})

When('I go to {string} with locator {string}', () => {
  cy.get('#settings-link', { timeout: 3000 }).should('be.visible') 
}) 
When('I hover to an element {string} with locator {string}', (eleName,locator) => {
  cy.xpath(locator, { timeout: 10000 }).trigger('mouseover') 
})

Then('I should see {string} in {string} is displayed with locator {string}', (eleName,page,locator) => {
  cy.get(locator, { timeout: 3000 }).should('be.visible')
})

When('while on {string} button in {string} I see user email on left with locator {string}', () => {
  cy.get('.mlb-settings-info-text', { timeout: 3000 }).should('be.visible')
})
Then('I navigate to {string} button with locator {string}', () => {
  cy.get('button[aria-label^="Favorite Team. Select your favorite team.Chosen teams will alwaysappear first on the Scores view..  , selectable"]', { timeout: 3000 }).should('be.visible')
})
// Then('I should see {string} in {string} is displayed with locator {string}', () => {
  
// })