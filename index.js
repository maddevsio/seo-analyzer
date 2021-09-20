const SeoInspector = require('./dist/seo-analyzer.js')

function rule() {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve('RULE 1 - passed');
    }, 3000);
  });
}

function rule2() {
  return new Promise(async (resolve, reject) => {
    resolve('RULE 1 - bad');
  });
}

new SeoInspector({
    done: (err, data) => {
      if (err) throw err;
    }
  })
  .inputFiles(['index.html'])
  .addRule(rule)
  .addRule(rule2)
  .outputConsole();
  // .write();

