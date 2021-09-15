const SeoInspector = require('./dist/seo-analyzer.js')
new SeoInspector({
    done: (err, data) => {
      if (err) throw err;
    }
  })
  .inputFiles(['index.html'])
  // .write();
