const fs = require('fs');

class Input {
  constructor() {}

  files(files) {
    return new Promise(async (resolve, reject) => {
      if (!Array.isArray(files)) {
        console.log('Input data is not a array');
        return reject();
      }
      if (files.length === 0) {
        console.log('Input data is empty');
        return reject();
      }
      const html = await this._getHtml(files);
      console.log(html);
    });
  }

  _getHtml(files) {
    return new Promise((resolve, reject) => {
      const html = [];
      files.forEach((file) => {
        const data = fs.readFileSync(file, 'utf8');
        html.push(data);
      });
      resolve(html);
    });
  }
}

export default Input;
