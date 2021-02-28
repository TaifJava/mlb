/** 
 * Aliases for hideous selectors can be placed here.
 */

export {games}

const games = {
  calendarDatePicker: '.mlb-scores-date-picker',
  previousArrow: '//*[contains(@class,"mlb-scores-date-picker")]//button[contains(@aria-label,"Previous")]',
  nextArrow: '//*[contains(@class,"mlb-scores-date-picker")]//button[contains(@aria-label,"Next")]',
  gamesScoreTile: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1)',
  gamesScoreTileLogo: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) .tile-score-header-team-logo',
  gamesScoreTileLabel: '[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) [class^="tile-score-header-team-label"]',
  gamesScoreTileFeedSelectorModal: '.feed-selector-feeds',
  gamesScoreTileFeedContentText: '[class="no-feeds-text"]',
  gamesScoreTileFeedTeamAway: '[class="feed-selector"] [class="feed-select-header-team away"]',
  gamesScoreTileFeedTeamHome: '[class="feed-selector"] [class="feed-select-header-team home"]',
  gamesScoreTileFeedTeamScore: '[class="feed-selector"] [class="feed-select-header-state-score"]',
  gamesScoreTileCalendrCell: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1)',
  gamesScoreTileCalendrCellDay: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-today-flag"]',
  gamesScoreTileCalendrCellVenueIndicator: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-venue-indicator text"]',
  gamesScoreTileCalendarLogo: '[class^="adk-grid-base"] [class^="mlb-calendar-row"]:nth-child(1) [class^="mlb-calendar-cel"]:nth-child(1) [class="tile-calendar-logo"]',
  gamesScoreTileCalendarDay: '[[class="calendar-grid-header"] :nth-child(1)[class^="calendar-grid-header-weekday"]',
  gamesTeamDropDownMenu: '[class="mlb-dropdown-item"]',
  gamesTeamLogoInDropDownMenu: '[class="mlb-dropdown-item"]:nth-child(1) .mlb-team-selector-logo',
  gamesTeamNameDropDownMenu: '[class="mlb-dropdown-item"]:nth-child(1) .mlb-team-selector-name',
  gamesTeamDropDownMenu: '[class="mlb-dropdown-item"]'

}