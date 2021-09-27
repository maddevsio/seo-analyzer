import axios from 'axios';
import sitemaps from 'sitemap-stream-parser';
import cliProgress from 'cli-progress';
import _colors from 'colors';

class Scanner {
  constructor() {
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Parsing pages |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Pages',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
  }

  async scan(urls) {
    const links = await this._getLinksFromSitemap(urls);
    const htmlDoms = await this._getHtmlDomFromLinks(links);
    return htmlDoms;
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
    const htmlDoms = [];
    const promises = [];

    // Start the progress bar
    this.consoleProgressBar.start(links.length, 0);

    for (const link of links) {
      promises.push(axios.get(link)
        .then(res => {
          if (res && res.status === 200) {
            htmlDoms.push({ source: link, text: res.data });
          }
        })
        .catch(error => {
          const err = error && error.response && error.response.status || 500;
          console.log(`Error: ${error} - ${link}`);
          console.log(
            `\n${_colors.yellow('==>')} ${_colors.white(link)} ${_colors.red(err)}`
          );
        })
        .finally(() => {
          this.consoleProgressBar.increment();
        })
      );
    }

    return Promise.all(promises).then(() => {
      // // Stop the progress bar
      this.consoleProgressBar.stop();
      return htmlDoms;
    });
  }
}

export default Scanner;
