const SeoAnalyzer = require('../dist/seo-analyzer.js');

module.exports = urls => {
  new SeoAnalyzer()
    // ------- Input methods -------- //
    .inputUrls(urls)
    // ------ Default rules -------- //
    .addRule('titleLengthRule', { min: 10, max: 50 })
    .addRule('metaBaseRule', { names: ['description', 'viewport'] })
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
      ]
    })
    .addRule('imgTagWithAltAttributeRule')
    .addRule('aTagWithRelAttributeRule')
    .addRule('canonicalLinkRule')
    // ------- Output methods ------- //
    .outputConsole()
    .run();
};
