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
  
  folders(folders) {
    return new Promise(async (resolve, reject) => {
      const files = await this._getFilesFromFolders(folders);
      console.log(files);
    });
  }

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

  _getFilesFromFolder(folder) {
    const result = [];

    const files = [folder];
    do {
      const filepath = files.pop();
      const stat = fs.lstatSync(filepath);
      if (stat.isDirectory()) {
        fs
          .readdirSync(filepath)
          .forEach(f => files.push(path.join(filepath, f)));
      } else if (stat.isFile()) {
        result.push(`${folder}/${path.relative(folder, filepath)}`);
      }
    } while (files.length !== 0);

    return result;
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
