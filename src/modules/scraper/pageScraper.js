// const ApartmentDB = require('../api/v1/apartments/model');

const scraperObject = {
  url: 'http://localhost:3000/',
  async scraper(browser) {
    const scrapedData = [];
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    await page.goto(this.url);

    // Waiting loading data
    let urls = ['http://localhost:3000/'];

    // Loop through each of those links, open a new page instance and get the relevant data from them
    let pagePromise = link =>
      new Promise(async (resolve, reject) => {
        let newPage = await browser.newPage();
        await newPage.goto(link);
        const dom =  await newPage.$eval('html', el => el.innerHTML);
        resolve(dom);
        await newPage.close();
      });

    for (const link of urls) {
      let currentPageData = await pagePromise(link);
      scrapedData.push(currentPageData);
    }
    await browser.close();
    console.log(scrapedData);
  }
};

module.exports = scraperObject;
