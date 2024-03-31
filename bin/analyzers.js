const SeoAnalyzer = require('../dist/seo-analyzer.js');

function detectInputs(options) {
  const INPUTS = {
    files: 'inputFiles',
    folders: 'inputFolders',
    urls: 'inputUrls'
  };
  return Object.keys(INPUTS)
    .filter(key => options[key])
    .map(key => ({
      input: INPUTS[key],
      value: options[key]
    }));
}

function detectIgnores(options) {
  const IGNORES = {
    ignoreFiles: 'ignoreFiles',
    ignoreFolders: 'ignoreFolders',
    ignoreUrls: 'ignoreUrls'
  };
  return Object.keys(IGNORES)
    .filter(key => options[key])
    .map(key => ({
      ignore: IGNORES[key],
      value: options[key]
    }));
}

module.exports = options => {
  const analyzer = new SeoAnalyzer();

  const ignores = detectIgnores(options);
  for (const { ignore, value } of ignores) {
    analyzer[ignore](value);
  }

  const inputs = detectInputs(options);
  for (const { input, value } of inputs) {
    analyzer[input](value);
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
