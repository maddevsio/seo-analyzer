const SeoAnalyzer = require('../dist/seo-analyzer.js');

// --------- Custom rules ------------ //
function customRule(dom) {
  return new Promise(async (resolve, reject) => {
    const paragraph = dom.window.document.querySelector('p');
    if (paragraph) {
      resolve('');
    } else {
      reject('Not found <p> tags');
    }
  });
}
// -------------------------------- //

new SeoAnalyzer()
  // ------- Input methods -------- //
  .inputFiles(['example/index.html'])
  // .inputFiles(['example/index.html', 'example/html/team.html'])
  // Default rules

  // ------ Default rules -------- //
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

  // ------- Output methods ------- //
  // .outputJson((json) => console.log(json))
  .outputConsole();
