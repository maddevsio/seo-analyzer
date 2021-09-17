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
      const listHTML = await this._getHtml(files);
      const listDOM = await this._getDom(listHTML);
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
      const listHtml = [];
      files.forEach((file) => {
        const htmlText = fs.readFileSync(file, 'utf8');
        listHtml.push(htmlText);
      });
      resolve(listHtml);
    });
  }

  /**
   * Transform the html to DOM
   * @param {Array} listHtml [{<string>}, {<string>}, ...] 
   * @returns {Promise.Array} [{<JSDOM>}, {<JSDOM>}, ...]
   */
  _getDom(listHtml) {
    return new Promise((resolve, reject) => {
      const doms = [];
      listHtml.forEach((html) => {
        let dom = new JSDOM(html);
        doms.push(dom);
      });
      resolve(doms);
    });
  }
}

export default Input;
