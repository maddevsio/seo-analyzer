import axios from 'axios';
import sitemaps from 'sitemap-stream-parser';
import cliProgress, { SingleBar } from 'cli-progress';
import _colors from 'colors';
import Logger from './logger';
import { IInputHtml } from '../interfaces';

class Scanner {
  logger: Logger;
  consoleProgressBar: SingleBar;
  inputUrl: string;
  ignoreUrls: string[];
  constructor(logger: Logger) {
    this.logger = logger ?? new Logger();
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Processing... |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Pages',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    this.inputUrl = '';
    this.ignoreUrls = [];
  }

  /**
   * @param {Number} port - Port for the server to listen on
   * @returns {Array} - Array of html doms
   * @description - Scrapes the site and returns the html doms
   */
  async run(port: Number, urls: string[], sitemap: string) {
    this.inputUrl = `http://localhost:${port}`;
    this.ignoreUrls = urls;
    const links = await this.getLinksFromSitemap(sitemap);
    const htmlDoms = await this.getHtmlDomFromLinks(links);
    return htmlDoms;
  }

  /**
   * Get the html doms from the urls
   * @param {Array} urls - Array of urls
   * @returns {Array} - Array of html doms
   */
  async urls(urls: string[]) {
    const htmlDoms = await this.getHtmlDomFromLinks(urls);
    return htmlDoms;
  }

  /**
   * Get the links from the sitemap
   * @returns {Array} - Array of links
   * @description - Scrapes the sitemap and returns the links
   */
  private getLinksFromSitemap(sitemap: string): Promise<string[] | []> {
    this.logger.info(`🚀  Get sitemap from ${this.inputUrl}\n`);
    return new Promise(resolve => {
      const formattedUrl = `${this.inputUrl}/${sitemap}`;
      const links: string[] = [];
      sitemaps.parseSitemaps(
        formattedUrl,
        (link: string) => {
          // Ignore the links that are in the ignore list
          const path = link.replace(/^.*\/\/[^/]+/, '');
          if (this.ignoreUrls.indexOf(path) === -1) {
            links.push(this.formatLink(link));
          }
        },
        (err: any) => {
          if (err) {
            this.logger.error('❌  Sitemap not found\n', true);
          } else {
            if (!links.length) {
              this.logger.error('❌  Links not found\n', true);
            } else {
              this.logger.success('✅  Done\n');
              resolve(links);
            }
          }
        }
      );
    });
  }

  /**
   * Formats the link to be used in axios
   * @param {String} link
   * @returns {String} - Formatted link > http://localhost:{port}/link
   */
  private formatLink(link: string) {
    const result = link.replace(/^.*\/\/[^/]+/, this.inputUrl);
    return result;
  }

  /**
   * Sleep for the given time in milliseconds
   * @param {Number} ms
   * @returns {Promise}
   */
  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get the html doms from the links
   * @param {Array} links - Array of links
   * @returns {Array} - Array of html doms
   * @description - Scrapes the links and returns the html doms
   */
  private async getHtmlDomFromLinks(links: string[]) {
    const htmlDoms: IInputHtml[] = [];
    const promises = [];
    this.logger.info('🚀  Parsing HTML\n');

    // Start the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.start(links.length, 0);

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
            this.logger.error(`\n\n${error} - ${link}`);
            this.logger.error(
              `\n${_colors.yellow('==>')} ${_colors.white(link)} ${_colors.red(
                err
              )}`
            );
          })
          .finally(() => {
            this.logger.level <= 4 && this.consoleProgressBar.increment();
          })
      );
      await this.sleep(500);
    }

    return Promise.all(promises).then(() => {
      // // Stop the progress bar
      this.logger.level <= 4 && this.consoleProgressBar.stop();
      return htmlDoms;
    });
  }
}

export default Scanner;
