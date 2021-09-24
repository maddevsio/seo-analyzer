import axios from 'axios';
import sitemaps from 'sitemap-stream-parser';

class Scanner {
  async scan(urls) {
    const links = await this._getLinksFromSitemap(urls);
    const htmlDoms = await this._getHtmlDomFromLinks(links);
    console.log('links', links.length);
    console.log('DOMS', htmlDoms.length);
  }

  _getLinksFromSitemap(urls) {
    return new Promise(resolve => {
      const formatttedUrls = this._concatSitemapTuUrls(urls);
      const allUrls = [];
      sitemaps.parseSitemaps(formatttedUrls, url => { allUrls.push(url); }, () => {
        resolve(allUrls);
      });
    });
  }

  _concatSitemapTuUrls(urls) {
    return urls.map(url => `${url}/sitemap.xml`);
  }

  async _getHtmlDomFromLinks(links) {
    let htmlDoms = [];
    for (const link of links) {
      try {
        const response = await axios.get(link);
        console.log(link);
        htmlDoms.push(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    return htmlDoms;
  }
}

export default Scanner;
