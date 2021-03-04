/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { SignUp } from '../pages/SignUp'

import 'cypress-wait-until';
import { now } from 'cypress/types/lodash';


require('cypress-xpath')

When('I land on "Create Account" tile on "Welcome Page"', () => {
  
  
  cy.get(SignUp.WelcomeTitleText, { timeout: 10000 }).should('be.visible')

})

When('I press enter on "Get Started" button', () => {
  cy.get('body').type('{enter}')
})



Then('I land on Free MLB account tile in paywall page', () => {
  cy.get(SignUp.FreeAccountTile, { timeout: 15000 }).should('be.visible')  
})

When('I press enter since I am already on "Continue" button', () => {
  
  cy.get('body').type('{enter}')
})

When('Land on page title "Create a free MLB account..." on Email input field', () => {
  cy.get(SignUp.FreeSignUpMessage, { timeout: 4000 }).should('be.visible')
  cy.get(SignUp.FreeEmailField, { timeout: 4000 }).should('be.visible')
});

Then('I hit enter and input Email', () => {
  cy.get('body').type('{enter}')
  cy.get(FreeEmailField).type('MLBmail'+ cy.clock(now) +'@gmail.com')
})

And('Input "{string}" as password', () => {
  cy.get(SignUp.FreeAccountTile, { timeout: 15000 }).should('be.visible')  
  cy.get(FreeEmailField).type("testerz")
  
})
