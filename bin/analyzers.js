const SeoAnalyzer = require('../dist/seo-analyzer.js');

const IGNORES = {
  ignoreFiles: 'ignoreFiles',
  ignoreFolders: 'ignoreFolders',
  ignoreUrls: 'ignoreUrls'
};

const INPUTS = {
  files: 'inputFiles',
  folders: 'inputFolders',
  urls: 'inputUrls'
};

function detectOptions(options, obj) {
  return Object.keys(obj)
    .filter(key => options[key])
    .map(key => ({
      name: obj[key],
      value: options[key]
    }));
}

module.exports = options => {
  const analyzer = new SeoAnalyzer();

  const ignores = detectOptions(options, IGNORES);
  for (const { name, value } of ignores) {
    analyzer[name](value);
  }

  const inputs = detectOptions(options, INPUTS);
  for (const { name, value } of inputs) {
    analyzer[name](value);
  }

  analyzer
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
