const browserObject = require('./browser');
const scraperController = require('./pageController');

// Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
const runScraper = () => {
  scraperController(browserInstance);
};

runScraper();

// export default runScraper;
