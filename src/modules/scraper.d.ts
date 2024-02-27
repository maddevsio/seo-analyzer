export default Scanner;
declare class Scanner {
    constructor(logger: any);
    logger: any;
    consoleProgressBar: any;
    inputUrl: string;
    ignoreUrls: string;
    /**
     * @param {Number} port - Port for the server to listen on
     * @returns {Array} - Array of html doms
     * @description - Scrapes the site and returns the html doms
     */
    run(port: number, urls: any, sitemap: any): any[];
    /**
     * Get the links from the sitemap
     * @returns {Array} - Array of links
     * @description - Scrapes the sitemap and returns the links
     */
    _getLinksFromSitemap(sitemap: any): any[];
    /**
     * Formats the link to be used in axios
     * @param {String} link
     * @returns {String} - Formatted link > http://localhost:{port}/link
     */
    _formatLink(link: string): string;
    /**
     * Sleep for the given time in milliseconds
     * @param {Number} ms
     * @returns {Promise}
     */
    sleep(ms: number): Promise<any>;
    /**
     * Get the html doms from the links
     * @param {Array} links - Array of links
     * @returns {Array} - Array of html doms
     * @description - Scrapes the links and returns the html doms
     */
    _getHtmlDomFromLinks(links: any[]): any[];
}
