export default Input;
export type ListDom = Array<JSDOM>;
/**
 * @typedef {Array<JSDOM>} ListDom
 */
declare class Input {
    constructor(logger: any);
    logger: any;
    scraper: Scraper;
    consoleProgressBar: any;
    badType: string;
    emptyList: string;
    ignoreFolders: any[];
    ignoreFiles: any[];
    /**
     * Get the html from files
     * @param {Array<string>} files [<string>, <string>, ...]
     * @param ignoreFiles
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @memberof Input
     */
    files(files?: Array<string>, ignoreFiles?: any[]): Promise<ListDom>;
    /**
     * Get the html from files in folders
     * @param {Array<string>} folders [<string>, <string>, ...]
     * @param ignoreFolders
     * @param ignoreFiles
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @memberof Input
     */
    folders(folders?: Array<string>, ignoreFolders?: any[], ignoreFiles?: any[]): Promise<ListDom>;
    /**
     * Get the DOM from urls
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @param port
     * @param ignoreUrls
     */
    spa(port: any, ignoreUrls: any[], sitemap: any): Promise<ListDom>;
    /**
     * Get all files from folders
     * @param {Array<string>} folders [<string>, <string>, ...]
     * @returns {Promise<Array<string>>} [<string>, <string>, ...]
     * @private
     * @example ['html', 'dist', 'src']
     */
    private _getFilesFromFolders;
    /**
     * Get files from folder
     * @param {string} folder
     * @returns {Promise<Array<string>>} [<string>, <string>, ...]
     * @private
     * @memberof Input
     */
    private _getFilesFromFolder;
    /**
     * Get the html from file
     * @param {Array<string>} files [<string>, <string>, ...]
     * @returns {Promise<Array<string>>} ['<html><body>...</body></html>', '<html><body>...</body></html>', ...]
     * @private
     * @memberof Input
     */
    private _getHtml;
    /**
     * Transform html to DOM
     * @param {Array<{text: string, source: string}>} list [{text: <string>, source: <string>}, {text: <string>, source: <string>}, ...]
     * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
     * @private
     */
    private getDom;
}
import { JSDOM } from 'jsdom';
import Scraper from './scraper';
