const SeoAnalyzer = require('./dist/seo-analyzer.js')

// --------- Custom rules ------------ //
function customRule(dom) {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve('RULE 1 - passed');
    }, 3000);
  });
}

function customRule2(dom) {
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
  .inputFiles(['index.html', 'about.html'])
  // Default rules
  .addRule('titleLengthRule', { min: 10, max: 50 })
  .addRule('noTooManyStrongTagsRule', { threshold: 2 })
  .addRule('metaBaseRule', { list: ['description', 'viewport'] })
  .addRule('metaSocialRule', {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url'
    ], 
  })
  .addRule('hTagsRule')
  .addRule('noMoreThanOneH1TagRule')
  .addRule('imgTagWithAltAttritubeRule')
  .addRule('headTagWithTitleAndDescriptionKeywordsMetaRule')
  .addRule('aTagWithRelAttritubeRule')
  .addRule('canonicalLinkRule')
  // Custom rules
  .addRule(customRule)
  .addRule(customRule2)
  .start();
