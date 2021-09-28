import axios from 'axios';
import sitemaps from 'sitemap-stream-parser';
import cliProgress from 'cli-progress';
import _colors from 'colors';
import Logger from './logger';

class Scanner {
  constructor() {
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Processing... |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Pages',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    this.logger = new Logger();
    this.inputUrl = '';
  }

  async scan() {
    const links = await this._getLinksFromSitemap();
    const htmlDoms = await this._getHtmlDomFromLinks(links);
    return htmlDoms;
  }

  _getLinksFromSitemap() {
    this.inputUrl = 'http://localhost:3000';
    this.logger.info(`🚀  Get sitemap from ${this.inputUrl}\n`);
    return new Promise(resolve => {
      const formatttedUrl = `${this.inputUrl}/sitemap.xml`;
      const links = [];
      sitemaps.parseSitemaps(
        formatttedUrl,
        link => {
          links.push(this._formatLink(link));
        },
        err => {
          if (err) {
            this.logger.error('❌  Sitemap not found\n');
            // process.exit(1);
          } else {
            if (links.length === 0) {
              this.logger.error('❌  Links not found\n');
              // process.exit(1);
            } else {
              this.logger.success('✅  Done\n');
              resolve(links);
            }
          }
        }
      );
    });
  }

  _formatLink(link) {
    const result = link.replace(/^.*\/\/[^/]+/, this.inputUrl);
    return result;
  }

  /**
   * Sleep for the given time in milliseconds
   * @param {Number} ms
   * @returns {Promise}
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async _getHtmlDomFromLinks(links) {
    const htmlDoms = [];
    const promises = [];
    this.logger.info('🚀  Parsing HTML\n');

    // Start the progress bar
    this.consoleProgressBar.start(links.length, 0);

    for (const link of links) {
      promises.push(
        axios
          .get(link)
          .then(res => {
            if (res && res.status === 200) {
              htmlDoms.push({ source: link, text: res.data });
            }
          })
          .catch(error => {
            const err =
              (error && error.response && error.response.status) || 500;
            console.log(`Error: ${error} - ${link}`);
            console.log(
              `\n${_colors.yellow('==>')} ${_colors.white(link)} ${_colors.red(
                err
              )}`
            );
          })
          .finally(() => {
            this.consoleProgressBar.increment();
          })
      );
      await this.sleep(500);
    }

    return Promise.all(promises).then(() => {
      // // Stop the progress bar
      this.consoleProgressBar.stop();
      return htmlDoms;
    });
  }
}

export default Scanner;
