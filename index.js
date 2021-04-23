const fs = require('fs')
const SeoInspector = require('./dist/seo-analyzer.js')
new SeoInspector({
    done: (err, data) => {
      if (err) throw err;
    }
  })
  .read(fs.createReadStream('index.html'))
  .write(fs.createWriteStream('report.txt'));
