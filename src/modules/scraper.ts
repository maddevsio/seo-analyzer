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
  allowLocalhost: boolean;
  constructor(logger: Logger, allowLocalhost: boolean = false) {
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
    this.allowLocalhost = allowLocalhost;
  }

  /**
   * @param {number} port - Port for the server to listen on
   * @returns {Array} - Array of html doms
   * @description - Scrapes the site and returns the html doms
   */
  async run(port: number, urls: string[], sitemap: string) {
    this.inputUrl = `http://localhost:${port}`;
    this.ignoreUrls = urls;
    this.allowLocalhost = true; // Allow localhost for SPA analysis
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
   * Validates URL to protect against SSRF attacks
   * @param {String} url - URL to validate
   * @returns {boolean} - true if URL is valid and safe
   * @description - Checks protocol, host, and port to prevent SSRF attacks
   */
  private validateUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);

      // Check protocol - only http or https allowed
      if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
        this.logger.info(
          `Invalid protocol: ${parsedUrl.protocol} for URL: ${url}`
        );
        return false;
      }

      const hostname = parsedUrl.hostname.toLowerCase();

      // Check for localhost and loopback addresses
      const isLocalhost =
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '0.0.0.0' ||
        hostname === '::1' ||
        hostname.startsWith('127.') ||
        hostname === '[::1]';

      if (isLocalhost && !this.allowLocalhost) {
        this.logger.info(`Localhost access not allowed: ${url}`);
        return false;
      }

      // Check for private IP ranges (10.x.x.x, 192.168.x.x, 172.16-31.x.x)
      if (!this.allowLocalhost) {
        const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        const match = hostname.match(ipv4Regex);

        if (match) {
          const [, oct1, oct2, oct3, oct4] = match.map(Number);

          // Validate octets are in valid range
          if (oct1 > 255 || oct2 > 255 || oct3 > 255 || oct4 > 255) {
            this.logger.info(`Invalid IP address: ${url}`);
            return false;
          }

          // Check for private IP ranges
          if (
            oct1 === 10 || // 10.0.0.0/8
            (oct1 === 172 && oct2 >= 16 && oct2 <= 31) || // 172.16.0.0/12
            (oct1 === 192 && oct2 === 168) // 192.168.0.0/16
          ) {
            this.logger.info(`Private IP address not allowed: ${url}`);
            return false;
          }
        }
      }

      // Check port - system ports (< 1024) not allowed, except 80 and 443
      const port = parsedUrl.port;
      if (port) {
        const portNum = parseInt(port, 10);
        if (portNum < 1024 && portNum !== 80 && portNum !== 443) {
          this.logger.info(`System port not allowed: ${port} for URL: ${url}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      this.logger.info(`Invalid URL: ${url} - ${error}`);
      return false;
    }
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

    // Filter out invalid URLs
    const validLinks = links.filter(link => {
      const isValid = this.validateUrl(link);
      if (!isValid) {
        this.logger.info(`Skipping invalid URL: ${link}`);
      }
      return isValid;
    });

    // Start the progress bar
    this.logger.level <= 4 &&
      this.consoleProgressBar.start(validLinks.length, 0);

    for (const link of validLinks) {
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
