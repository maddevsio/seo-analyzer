const SeoAnalyzer = require('./dist/seo-analyzer.js')

// --------- Custom rules ------------ //
function customRule() {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve('RULE 1 - passed');
    }, 3000);
  });
}

function customRule2() {
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
  // Default rules
  .addRule('titleLengthRule', { min: 10, max: 50 })
  .addRule('noTooManyStrongTagsRule', { threshold: 2 })
  .addRule('hTagsRule')
  .addRule('noMoreThanOneH1TagRule')
  .addRule('imgTagWithAltAttritubeRule')
  // Custom rules
  .addRule(customRule)
  .addRule(customRule2)
  .start();
