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

Given('I browse on a {string}', (viewport) => {
  cy.viewport(viewport)
})

Given('I browse on a screen {string} and {string}', (width,height) => {
  cy.viewport(width,height)
})

Given('I visit {string}', (url) => {
  Cypress.config('defaultCommandTimeout', 10000);
  cy.visit(url)
  
  cy.viewport(1920, 1080)
})


Then('I see {string} in the title', titleText => {
  cy.title().should('include', titleText)
})

Then('I should see Hero Tile Title is displayed', () => {
  cy.get(home.heroTitle).should('be.visible')
})

When('I should see Game Hero Tile is displayed', () => {
  cy.get(home.gameHero).should('be.visible')
})

Then('I should see Game Tile in Home is displayed', () => {
  cy.get(home.gameTileHome).should('be.visible')
})

Then('I should see {string} as Login success message', successText => {  
  cy.get(login.successMessage, { timeout: 10000 }).should('contain',successText)  
})

Then('I should see text {string} in element {string}', (text,locator) => {  
  cy.get(locator, { timeout: 10000 }).should('contain',text)  
})

Then('I should see {string} as Login congrats message', congratsText => {
  cy.get(login.congratsText).should('contain',congratsText)
})

Then('I should see {string} as Video Tile Title', titleText => {
  cy.get(home.videoListTile).should('contain',titleText)
})

Then('I should see Get Started button is displayed', () => {
  cy.get(login.loginGetStartedButton).should('be.visible')
})

Then('I should see {string} as SVOD Tile Title', titleText => {
  cy.get(home.svodListTile).should('contain',titleText)
})

Then('I should see Hero Tile Date is displayed', () => {
  cy.get(home.heroDate).should('be.visible')
})

Then('I should see Hero Tile Timestamp is displayed', () => {
  cy.get(home.heroTimestamp).should('be.visible')
})

Then('I should see Hero Tile Watch now button is displayed', () => {
  cy.get(home.videoHeroButton).should('be.visible')
})

Then('I should see Hero Tile Lock Icon is displayed', () => {
  cy.get(home.videoHeroLockIcon).should('be.visible')
})

Then('I should see Video Tile Title is displayed', () => {
  cy.get(home.videoTitle).should('be.visible')
})

Then('I should see SVOD Tile Title is displayed', () => {
  cy.get(home.svodTileTitle).should('be.visible')
})

Then('I should see Video Tile Date is displayed', () => {
  cy.get(home.videoDate).should('be.visible')
})

Then('I should see SVOD Tile Date is displayed', () => {
  cy.get(home.svodTileDate).should('be.visible')
})

Then('I should see Video Tile Duration is displayed', () => {
  cy.get(home.videoDuration).should('be.visible')
})

Then('I should see SVOD Tile Duration is displayed', () => {
  cy.get(home.svodTileDuration).should('be.visible')
})

Then('I should see Video Tile Image is displayed', () => {
  cy.get(home.videoTileImage).should('be.visible')
})

Then('I should see SVOD Tile Image is displayed', () => {
  cy.get(home.svodTileImage).should('be.visible')
})

Then('I should see Video Tile Description is displayed', () => {
  cy.get(home.videoDescription).should('be.visible')
})

Then('I should see SVOD Tile Description is displayed', () => {
  cy.get(home.svodTileDescription).should('be.visible')
})

Then('I should see Games is displayed', () => {
  cy.pause(5000)
  cy.get(home.games).should('be.visible')
})

Then('I should see Settings is displayed', () => {
  cy.get(home.settings).should('be.visible')
})

Then('I should see Login is displayed', () => {
  cy.get(home.login).should('be.visible')
})

Then('I should see Get MLB.TV is displayed', () => {
  cy.get(home.getMLBTV).should('be.visible')
})

Then('the page always looks the same', () => {
  cy.get('body').matchImageSnapshot()
})

//Games
Then('I should see Calendar date picker is displayed', () => {
  cy.get(games.calendarDatePicker).should('be.visible')
})

Then('I should see Calendar previous arrow is displayed', () => {
  cy.xpath(games.previousArrow).should('be.visible')
})

Then('I should see Calendar next arrow is displayed', () => {
  cy.xpath(games.nextArrow).should('be.visible')
})

When('I should see login page displayed', () => {
  cy.xpath(login.loginSubMessage).should('be.visible')
})

Then('I should see game score tile label is displayed', () => {
  cy.get(games.gamesScoreTileLabel).should('be.visible')
})

Then('I should see game score tile logo is displayed', () => {
  cy.get(games.gamesScoreTileLogo).should('be.visible')
})

Then('I should see feed select modal is displayed', () => {
  cy.get(games.gamesScoreTileFeedSelectorModal).should('be.visible')
})

Then('I should see feed select modal is not displayed', () => {
  cy.waitUntil(function() {
    cy.get(games.gamesScoreTileFeedSelectorModal).should('not.exist');
  })
})

When('I click first game score tile', () => {
  cy.get(games.gamesScoreTile).click()
})

When('I click Get started', () => {
  cy.get(login.loginGetStartedButton).click()
})

When('I click anywhere in the page except feed modal', () => {
  cy.get('body').type('{enter}')
})

Then('I should see Calendar date picker is displayed', () => {
  cy.get(games.calendarDatePicker).should('be.visible')
})

// When('I select my favorite team with text {string}', team => {

//     Cypress.config('defaultCommandTimeout', 10000);
//     cy.get('body').type('{downarrow}')
//   cy.get('body').type('{downarrow}')
//   cy.get('body').type('{rightarrow}')
//   cy.xpath(favorites.favoriteTeam2).click()
//   cy.pause(2500)
//   Cypress.config('defaultCommandTimeout', 5000);
//     cy.xpath(favorites.favoriteTeam2).click()

    
// })

// When('I click an element with text {string}', buttonText => {
//   cy.get('.mlb-onboarding-tile-label').contains(buttonText).click()
  
// })
When('I click done', () => {
  cy.get(favorites.done).click()
})

// When('I type {string} in email', email => {
//   cy.get(login.email).type(email)
// })

// When('I type {string} in password', password => {
//   cy.get(login.password).type(password)
// })

When('I click login', () => {
  cy.get(login.submit).click()
})



// When('I click next', () => {
//   cy.get(favorites.next).click()
//   cy.pause(2500)
// })

When('I click right arrow', () => {
  cy.get('body').type('{rightarrow}')
})

When('I click down arrow', () => {
  cy.get('body').type('{downarrow}')
})

When('I scroll to Video Tile', () => {
  cy.get('body').type('{downarrow}')
  cy.get('body').type('{downarrow}')
})

When('I navigate to Games', () => {
  cy.get(home.home, {timeout : 10000}).should('be.visible')
  cy.pause(10000)
  cy.get('body').type('{uparrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{enter}')
  cy.pause(3000)

})

When('I navigate to Settings', () => {
  cy.get(home.home, {timeout : 10000}).should('be.visible')
  cy.get('body').type('{uparrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{rightarrow}')
  cy.pause(3000)
  cy.get('body').type('{enter}')
  cy.pause(5000)
})

When('I scroll to SVOD Tile', () => {
  cy.get('body').type('{downarrow}')
})

When('I click continue', () => {
  cy.get(favorites.continue).click()
})

When('I click {string} with locator {string}', (elementName, elementLocator) => {
  cy.get(elementLocator).click()
})