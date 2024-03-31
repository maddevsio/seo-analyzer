const colors = require('colors');
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

function formatRuleParams(input) {
  if (!input) return null;
  try {
    const jsonObj = JSON.parse(input);
    return jsonObj;
  } catch {
    const err = `❌ Invalid params format. Params must be in JSON format. For example: -r metaSocialRule='{ "properties": ["og:url"] }'`;
    console.error(`${colors.red(err)}`);
    process.exit(1);
  }
}

function detectOptions(options, obj) {
  return Object.keys(obj)
    .filter(key => options[key])
    .map(key => ({
      name: obj[key],
      value: options[key]
    }));
}

function detectRules(options) {
  const rules = options.rules || [];
  return rules.map(rule => ({
    name: rule.split('=')[0],
    value: formatRuleParams(rule.split('=')[1])
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

  const rules = detectRules(options);
  for (const { name, value } of rules) {
    analyzer.addRule(name, value);
  }

  analyzer.outputConsole().run();
};
