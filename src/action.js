const core = require('@actions/core');
const SeoAnalyzer = require('./seo-analyzer');

function formatParams(params) {
  if (params !== '') {
    return params.split('\n');
  }
  return null;
}

const folders = formatParams(core.getInput('folders'));
const files = formatParams(core.getInput('files'));

new SeoAnalyzer()
  .inputFolders(folders)
  .inputFiles(files)
  .addRule('titleLengthRule', { min: 10, max: 100 })
  .outputConsole();
