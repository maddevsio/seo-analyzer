const SeoInspector = require('./dist/seo-analyzer.js')

function rule() {
  console.log('Hello world!'));
}

new SeoInspector({
    done: (err, data) => {
      if (err) throw err;
    }
  })
  .inputFiles(['index.html'])
  .addRule(rule)
  .outputConsole();
  // .write();

