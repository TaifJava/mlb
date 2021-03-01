/** 
 * Aliases for hideous selectors can be placed here.
 */

export {favorites}

const favorites = {
  favoriteTeam: '//div[@class="mlb-favorites-team-name" and text()="Baltimore Orioles"]',
  favoriteTeam2:'//div[@class="mlb-favorites-team-name" and text()="Cleveland Indians"]',
  next: 'button[aria-label^="Next"]',
  done: 'button[aria-label^="Done"]',
  continue: '.mlb-onboarding-tile-label'
}