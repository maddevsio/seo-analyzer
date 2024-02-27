import fs from 'fs';
import path from 'path';
import { JSDOM, VirtualConsole } from 'jsdom';
import cliProgress from 'cli-progress';
import _colors from 'colors';
import Logger from './logger';
import Scraper from './scraper';

/**
 * @typedef {Array<JSDOM>} ListDom 
 */

class Input {
  constructor() {
    this.logger = new Logger();
    this.scraper = new Scraper();
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Processing... |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Folders',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    this.badType =
      'The inputFiles function takes an array only ["index.html", "...", "..."]';
    this.emptyList =
      'You need to pass an array to the inputFiles function ["index.html", "...", "..."]';
    this.ignoreFolders = [];
    this.ignoreFiles = [];
  }

  /**
   * Get the html from files
   * @param {Array<string>} files [<string>, <string>, ...]
   * @param ignoreFiles
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @memberof Input
   */
  async files(files = [], ignoreFiles = []) {
    if (!Array.isArray(files) || !files.length)
      this.logger.error('❌  The "inputFiles" method expects an array of files.\n', true);

    if (!Array.isArray(ignoreFiles))
      this.logger.error('❌  The "ignoreFiles" method expects an array of ignore files.\n', true);

    this.logger.info('\n🚀  Parsing files\n');
    if (files.length === 0) {
      this.logger.error(this.emptyList);
    }
    if (!Array.isArray(files)) {
      this.logger.error(this.badType);
    }
    this.ignoreFiles = ignoreFiles;
    const listTexts = await this._getHtml(files);
    const listDOM = await this.getDom(listTexts);
    return listDOM;
  }

  /**
   * Get the html from files in folders
   * @param {Array<string>} folders [<string>, <string>, ...]
   * @param ignoreFolders
   * @param ignoreFiles
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @memberof Input
   */
  async folders(folders = [], ignoreFolders = [], ignoreFiles = []) {
    if (!Array.isArray(folders) || !folders.length)
      this.logger.error('❌  The "inputFolders" method expects an array of folders.\n', true);

    if (!Array.isArray(ignoreFolders))
      this.logger.error('❌  The "ignoreFolders" method expects an array of ignore folders.\n', true);

    this.logger.info('🚀  Parsing folders\n');

    // Start the progress bar
    this.consoleProgressBar.start(folders.length, 0);
    this.ignoreFolders = ignoreFolders;
    this.ignoreFiles = ignoreFiles;

    const files = await this._getFilesFromFolders(folders);
    const listDOM = await this.files(files, ignoreFiles);
    return listDOM;
  }

  /**
   * Get the DOM from urls
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @param port
   * @param ignoreUrls
   */
  async spa(port, ignoreUrls = [], sitemap) {
    const listTexts = await this.scraper.run(port, ignoreUrls, sitemap);
    const htmlDoms = await this.getDom(listTexts);
    return htmlDoms;
  }

  /**
   * Get all files from folders
   * @param {Array<string>} folders [<string>, <string>, ...]
   * @returns {Promise<Array<string>>} [<string>, <string>, ...]
   * @private
   * @example ['html', 'dist', 'src']
   */
  async _getFilesFromFolders(folders = []) {
    const files = [];
    for (const folder of folders) {
      const result = await this._getFilesFromFolder(folder);

      // Update the progress bar
      this.consoleProgressBar.increment();

      files.push(...result);
    }

    // Stop the progress bar
    this.consoleProgressBar.stop();

    if (!files.length) this.logger.error('\n❌  No files found.\n', true);

    return files;
  }

  /**
   * Get files from folder
   * @param {string} folder
   * @returns {Promise<Array<string>>} [<string>, <string>, ...]
   * @private
   * @memberof Input
   */
  _getFilesFromFolder(folder = '') {
    try {
      const entryPaths = fs
        .readdirSync(folder)
        .map(entry => path.join(folder, entry));
      const filePaths = entryPaths.filter(
        entryPath =>
          fs.statSync(entryPath).isFile() && path.extname(entryPath) === '.html'
      );
      const dirPaths = entryPaths.filter(
        entryPath =>
          !filePaths.includes(entryPath) && fs.statSync(entryPath).isDirectory()
      );
      const dirFiles = dirPaths
        .filter(p => !this.ignoreFolders.includes(p))
        .reduce(
          (prev, curr) => prev.concat(this._getFilesFromFolder(curr)),
          []
        );
      return [...filePaths, ...dirFiles];
    } catch (error) {
      this.logger.error(`\n\n❌ Folder "${folder}" not found\n`);
      return [];
    }
  }

  /**
   * Get the html from file
   * @param {Array<string>} files [<string>, <string>, ...]
   * @returns {Promise<Array<string>>} ['<html><body>...</body></html>', '<html><body>...</body></html>', ...]
   * @private
   * @memberof Input
   */
  _getHtml(files) {
    const listTexts = [];
    const proccess = new cliProgress.Bar({
      format:
        'Processing... |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Sources',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });

    // Start the progress bar
    proccess.start(files.length, 0);

    files.forEach(file => {
      if (this.ignoreFiles.includes(file)) return;
      try {
        const text = fs.readFileSync(file, 'utf8');
        listTexts.push({ source: file, text });
        proccess.increment();
      } catch (error) {
        proccess.increment();
        this.logger.error(`\n\nFile "${file}" not found\n`);
      }
    });
    proccess.stop();
    if (!listTexts.length) this.logger.error('\n❌  No files found.\n', true);
    return listTexts;
  }

  /**
   * Transform html to DOM
   * @param {Array<{text: string, source: string}>} list [{text: <string>, source: <string>}, {text: <string>, source: <string>}, ...]
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @private
   */
  getDom(list) {
    const doms = [];
    const proccess = new cliProgress.Bar({
      format:
        'Handling html |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Sources',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    this.logger.info('\n🚀  Getting DOM from HTML\n');
    proccess.start(list.length, 0);
    // NOTE: https://github.com/jsdom/jsdom/issues/2177#issuecomment-379212964
    const virtualConsole = new VirtualConsole();
    list.forEach(item => {
      let dom = new JSDOM(item.text, { virtualConsole });
      doms.push({ source: item.source, dom });
      proccess.increment();
    });

    proccess.stop();
    console.log(doms);
    return doms;
  }
}

export default Input;
