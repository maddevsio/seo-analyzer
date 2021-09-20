const SeoAnalyzer = require('./dist/seo-analyzer.js')

// --------- Custom rules ------------ //
function custom_rule() {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve('RULE 1 - passed');
    }, 3000);
  });
}

function custom_rule2() {
  return new Promise(async (resolve, reject) => {
    resolve('RULE 2 - bad');
  });
}
// -------------------------------- //

new SeoAnalyzer({
    done: (err, data) => {
      if (err) throw err;
      console.log('REPORT: ', data);
    }
  })
  .inputFiles(['index.html'])
  .addRule(custom_rule)
  .addRule(custom_rule2)
  .start();
