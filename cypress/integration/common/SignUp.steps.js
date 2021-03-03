/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { SignUp } from '../pages/SignUp'

import 'cypress-wait-until';


require('cypress-xpath')

When('I land on "Create Account" tile on "Welcome Page"', WelcomeTitleText => {
  cy.get(SignUp.WelcomeTitleText).should('contain', WelcomeTitleText)

})

// When('I see {string} in the title', titleText => {
//   cy.title().should('include', titleText)
// })



// Then('I see {string} in the title', titleText => {
//   cy.title().should('include', titleText)
// })

// When(
//   /^User presses enter and inputs unique Email Address "([^"]*)"$/,

//   }
// );

// When(/^User goes down and inputs password "([^"]*)"$/, (password) => {

// });