import fs from 'fs';
import { JSDOM } from 'jsdom';

class Input {
  constructor() {}

  files(files) {
    return new Promise(async (resolve, reject) => {
      if (!Array.isArray(files)) {
        console.log('Input data is not a array');
        reject();
      }
      if (files.length === 0) {
        console.log('Input data is empty');
        reject();
      }
      const listTexts = await this._getHtml(files);
      const listDOM = await this._getDom(listTexts);
      resolve(listDOM);
    });
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
