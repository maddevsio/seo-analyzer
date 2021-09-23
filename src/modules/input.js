import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import Logger from './logger';

class Input {
  constructor() {
    this.logger = new Logger();
    this.badType = 'The inputFiles function takes an array only ["index.html", "...", "..."]';
    this.emptyList = 'You need to pass an array to the inputFiles function ["index.html", "...", "..."]';
  }

  /**
   * Get the html from files
   * @param {Array} files [<string>, <string>, ...]
   * @returns {Promise.Array} [<JSDOM>, <JSDOM>, ...]
   * @memberof Input
   * @example ['index.html', 'about.html', ...]
   */
  files(files = []) {
    return new Promise(async (resolve, reject) => {
      if (files.length === 0) {
        this.logger.error(this.emptyList);
      }
      if (!Array.isArray(files)) {
        this.logger.error(this.badType);
      }
      const listTexts = await this._getHtml(files);
      const listDOM = await this._getDom(listTexts);
      resolve(listDOM);
    });
  }
  
  /**
   * Get the html from files in folders
   * @param {string} folders [<string>, <string>, ...]
   * @returns {Promise.Array} [<JSDOM>, <JSDOM>, ...]
   * @memberof Input
   * @private
   */
  folders(folders) {
    return new Promise(async (resolve, reject) => {
      const files = await this._getFilesFromFolders(folders);
    });
  }

  /**
   * Get all files from folders
   * @param {Array} folders [<string>, <string>, ...]
   * @returns {Promise.Array} [<string>, <string>, ...]
   * @private
   * @example ['html', 'dist', 'src']
   */
  async _getFilesFromFolders(folders) {
    return new Promise(async (resolve, reject) => {
      const files = [];
      for (const folder of folders) {
        const result = await this._getFilesFromFolder(folder);
        files.push(...result);
      }
      resolve(files);
    });
  }

  /**
   * Get files from folder
   * @param {string} folder
   * @returns {Promise.Array} [<string>, <string>, ...]
   * @private
   * @memberof Input
   */
  _getFilesFromFolder(folder) {
    const entryPaths = fs.readdirSync(folder).map(entry => path.join(folder, entry));
    const filePaths = entryPaths.filter(entryPath => fs.statSync(entryPath).isFile());
    const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath));
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(this._getFilesFromFolder(curr)), []);
    return [...filePaths, ...dirFiles];
  }

  /**
   * Get the html from file
   * @param {*} files [path, path, ...]
   * @returns {Promise.Array} ['<string>', '<string>', ...]
   */
  _getHtml(files) {
    return new Promise((resolve, reject) => {
      const listTexts = [];
      files.forEach((file) => {
        const text = fs.readFileSync(file, 'utf8');
        listTexts.push({ file, text });
      });
      resolve(listTexts);
    });
  }

  /**
   * Transform html to DOM
   * @param {Array} list [{ <string>, <array> }, { <string>, <array> }, ...] 
   * @returns {Promise.Array} [{  <string>, <JSDOM> }, { <string>, <JSDOM> }, ...]
   */
  _getDom(list) {
    return new Promise((resolve, reject) => {
      const doms = [];
      list.forEach(item => {
        let dom = new JSDOM(item.text);
        doms.push({ file: item.file, dom });
      });
      resolve(doms);
    });
  }
}

export default Input;
