import sitemaps from 'sitemap-stream-parser';

class Scanner {
  async scan(urls) {
    const links = await this._getSitemap(urls);
    console.log('!!!!!!!!!!!!!', links);
  }

  _getSitemap(urls) {
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
}

export default Scanner;
