/** 
 * Aliases for hideous selectors can be placed here.
 */

export {home}

const home = {
  
  //main menu
  home: '#home-link',
  games: '#games-link',
  login: '#login-button',
  getMLBTV: '#paywall-button',
  settings: '#settings-link',
 
  //hero tile
  videoHero: '#videoHero',
  gameHero: '#gameHero',
  heroTitle: '#videoHero [class^="Title"]',
  heroTimestamp: '#videoHero [class^="TimeStamp"]',
  heroDate: '#videoHero [class^="Date"]',
  heroDescription: '#videoHero [class^="Description"]',
  videoHeroButton: '#videoHero #video-hero-button',
  videoHeroLockIcon: '#videoHero #video-hero-button [class^="LockIcon"]',

  //video tile
  videoTile: '#mlb-video-list',
  videoListTile: '#mlb-video-list #mlb-video-list-title',
  videoTileImage: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Image"]',
  videoDuration: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Timestamp"]',
  videoTitle: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Title"]',
  videoDate: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Date"]',
  videoDescription: '#mlb-video-list #mlb-video-list-list div:nth-child(1) [class^="VideoTile"] [class^="Description"]',


    //svod tile
    svodTile: '#mlbtv-featured-svod',
    svodListTile: '#mlbtv-featured-svod #mlbtv-featured-svod-title',
    svodTileImage: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="Image"]',
    svodTileLockIcon: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="LockIcon"]',
    svodTileDuration: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="Timestamp"]',
    svodTileTitle: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="Title"]',
    svodTileDate: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="Date"]',
    svodTileDescription: '#mlbtv-featured-svod-list div:nth-child(1) [class^="VideoTile"] [class^="Description"]',


}