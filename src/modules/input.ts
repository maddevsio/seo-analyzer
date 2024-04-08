import fs from 'fs';
import path from 'path';
import { JSDOM, VirtualConsole } from 'jsdom';
import cliProgress, { SingleBar } from 'cli-progress';
import _colors from 'colors';
import Logger from './logger';
import Scraper from './scraper';
import { IInputData, IInputHtml } from '../interfaces';

/**
 * @typedef {Array<JSDOM>} ListDom
 */

const BAD_TYPE_MESSAGE =
  'The inputFiles function takes an array only ["index.html", "...", "..."]';
const EMPTY_LIST_MESSAGE =
  'You need to pass an array to the inputFiles function ["index.html", "...", "..."]';

class Input {
  logger: Logger;
  scraper: Scraper;
  consoleProgressBar: SingleBar;
  ignoreFolders: string[];
  ignoreFiles: string[];
  constructor(logger: Logger) {
    this.logger = logger ?? new Logger();
    this.scraper = new Scraper(this.logger);
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'Processing... |' +
        _colors.green('{bar}') +
        '| {percentage}% || {value}/{total} Folders',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
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
  public async files(files: string[] = [], ignoreFiles: string[] = []) {
    if (!Array.isArray(files) || !files.length)
      this.logger.error(
        '❌  The "inputFiles" method expects an array of files.\n',
        true
      );

    if (!Array.isArray(ignoreFiles))
      this.logger.error(
        '❌  The "ignoreFiles" method expects an array of ignore files.\n',
        true
      );

    this.logger.info('\n🚀  Parsing files\n');
    if (files.length === 0) {
      this.logger.error(EMPTY_LIST_MESSAGE);
    }
    if (!Array.isArray(files)) {
      this.logger.error(BAD_TYPE_MESSAGE);
    }
    this.ignoreFiles = ignoreFiles;
    const listTexts = await this.getHtml(files);
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
  public async folders(
    folders: string[] = [],
    ignoreFolders: string[] = [],
    ignoreFiles: string[] = []
  ) {
    if (!Array.isArray(folders) || !folders.length)
      this.logger.error(
        '❌  The "inputFolders" method expects an array of folders.\n',
        true
      );

    if (!Array.isArray(ignoreFolders))
      this.logger.error(
        '❌  The "ignoreFolders" method expects an array of ignore folders.\n',
        true
      );

    this.logger.info('🚀  Parsing folders\n');

    // Start the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.start(folders.length, 0);
    this.ignoreFolders = ignoreFolders;
    this.ignoreFiles = ignoreFiles;

    const files = await this.getFilesFromFolders(folders);
    const listDOM = await this.files(files, ignoreFiles);
    return listDOM;
  }

  /**
   * Get the DOM from urls
   * @param port
   * @param ignoreUrls
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   */
  public async spa(port: Number, ignoreUrls: string[] = [], sitemap: string) {
    const listTexts = await this.scraper.run(port, ignoreUrls, sitemap);
    const htmlDoms = await this.getDom(listTexts);
    return htmlDoms;
  }

  /**
   * Get the DOM from urls
   * @param {Array} urls - Array of urls
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   */
  async urls(urls: string[]) {
    const rawDoms = await this.scraper.urls(urls);
    if (!rawDoms.length)
      this.logger.error('\n❌  Please check your urls.\n', true);
    const htmlDoms = await this.getDom(rawDoms);
    return htmlDoms;
  }

  /**
   * Get all files from folders
   * @param {Array<string>} folders [<string>, <string>, ...]
   * @returns {Promise<Array<string>>} [<string>, <string>, ...]
   * @private
   * @example ['html', 'dist', 'src']
   */
  private async getFilesFromFolders(folders: string[] = []) {
    const files = [];
    for (const folder of folders) {
      const result = await this.getFilesFromFolder(folder);

      // Update the progress bar
      this.logger.level <= 4 && this.consoleProgressBar.increment();

      files.push(...result);
    }

    // Stop the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.stop();

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
  private getFilesFromFolder(folder: string = ''): string[] {
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
          (acc: string[], curr: string) =>
            acc.concat(this.getFilesFromFolder(curr)),
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
  private getHtml(files: string[]) {
    const listTexts: IInputHtml[] = [];

    // Start the progress bar
    this.logger.level <= 4 && this.consoleProgressBar.start(files.length, 0);

    files.forEach(file => {
      if (this.ignoreFiles.includes(file)) return;
      try {
        const text = fs.readFileSync(file, 'utf8');
        listTexts.push({ source: file, text });
        this.logger.level <= 4 && this.consoleProgressBar.increment();
      } catch (error) {
        this.logger.level <= 4 && this.consoleProgressBar.increment();
        this.logger.error(`\n\nFile "${file}" not found\n`);
      }
    });
    this.logger.level <= 4 && this.consoleProgressBar.stop();
    if (!listTexts.length) this.logger.error('\n❌  No files found.\n', true);
    return listTexts;
  }

  /**
   * Transform html to DOM
   * @param {Array<{text: string, source: string}>} list [{text: <string>, source: <string>}, {text: <string>, source: <string>}, ...]
   * @returns {Promise<ListDom>} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @public
   */
  public getDom(list: IInputHtml[]) {
    const doms: IInputData[] = [];
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
    this.logger.level <= 4 && proccess.start(list.length, 0);
    // NOTE: https://github.com/jsdom/jsdom/issues/2177#issuecomment-379212964
    const virtualConsole = new VirtualConsole();
    list.forEach(item => {
      let dom = new JSDOM(item.text, { virtualConsole });
      doms.push({ source: item.source, dom });
      this.logger.level <= 4 && proccess.increment();
    });

    this.logger.level <= 4 && proccess.stop();
    return doms;
  }
}

export default Input;
