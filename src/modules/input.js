import fs from 'fs';
import path from 'path';
import { JSDOM, VirtualConsole } from 'jsdom';
import cliProgress from 'cli-progress';
import _colors from 'colors';
import Logger from './logger';

class Input {
  constructor() {
    this.logger = new Logger();
    this.consoleProgressBar = new cliProgress.Bar({
      format:
        'File Searching |' +
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
   * @param {Array} files [<string>, <string>, ...]
   * @returns {Promise.Array} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @memberof Input
   */
  async files(files = [], ignoreFiles = []) {
    if (files.length === 0) {
      this.logger.error(this.emptyList);
    }
    if (!Array.isArray(files)) {
      this.logger.error(this.badType);
    }
    this.ignoreFiles = ignoreFiles;
    const listTexts = await this._getHtml(files);
    const listDOM = await this._getDom(listTexts);
    return listDOM;
  }

  /**
   * Get the html from files in folders
   * @param {string} folders [<string>, <string>, ...]
   * @returns {Promise.Array} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @memberof Input
   */
  async folders(folders = [], ignoreFolders = [], ignoreFiles = []) {
    // Start the progress bar
    this.consoleProgressBar.start(folders.length, 0);
    this.ignoreFolders = ignoreFolders;
    this.ignoreFiles = ignoreFiles;

    const files = await this._getFilesFromFolders(folders);
    const listDOM = await this.files(files, ignoreFiles);
    return listDOM;
  }

  /**
   * Get all files from folders
   * @param {Array} folders [<string>, <string>, ...]
   * @returns {Promise.Array} [<string>, <string>, ...]
   * @private
   * @example ['html', 'dist', 'src']
   */
  async _getFilesFromFolders(folders = []) {
    const files = [];
    for (const folder of folders) {
      // Update the progress bar
      this.consoleProgressBar.increment();

      const result = await this._getFilesFromFolder(folder);

      files.push(...result);
    }

    // Stop the progress bar
    this.consoleProgressBar.stop();

    return files;
  }

  /**
   * Get files from folder
   * @param {string} folder
   * @returns {Promise.Array} [<string>, <string>, ...]
   * @private
   * @memberof Input
   */
  _getFilesFromFolder(folder = []) {
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
      this.logger.error(`Folder "${folder}" not found`);
      return [];
    }
  }

  /**
   * Get the html from file
   * @param {*} files [<string>, <string>, ...]
   * @returns {Promise.Array} ['<html><body>...</body></html>', '<html><body>...</body></html>', ...]
   * @private
   * @memberof Input
   */
  _getHtml(files) {
    const listTexts = [];
    files.forEach(file => {
      if (this.ignoreFiles.includes(file)) return;
      try {
        const text = fs.readFileSync(file, 'utf8');
        listTexts.push({ file, text });
      } catch (error) {
        this.logger.error(`File "${file}" not found`);
      }
    });
    return listTexts;
  }

  /**
   * Transform html to DOM
   * @param {Array} list [<string>, <string>, ...]
   * @returns {Promise.Array} [{ window: {}, document: {}, ... }, { window: {}, document: {}, ... }, ...]
   * @private
   */
  _getDom(list) {
    const doms = [];
    list.forEach(item => {
      // NOTE: https://github.com/jsdom/jsdom/issues/2177#issuecomment-379212964
      const virtualConsole = new VirtualConsole();
      let dom = new JSDOM(item.text, { virtualConsole });
      doms.push({ file: item.file, dom });
    });
    return doms;
  }
}

export default Input;
