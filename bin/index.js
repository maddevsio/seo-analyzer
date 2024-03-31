#!/usr/bin/env node
const { Command } = require('commander');
const ver = require('./version');
const analyzer = require('./analyzer');

const program = new Command();

program
  .option('-v, --version', 'Show version', ver, '')
  // IGNORES
  .option('-iu, --ignore-urls <ignoreUrls...>', 'Multiple ignore urls')
  .option('-if, --ignore-files <ignoreFiles...>', 'Multiple ignore files')
  .option(
    '-ifl, --ignore-folders <ignoreFolders...>',
    'Multiple ignore folders'
  )
  // INPUTS
  .option('-u, --urls <urls...>', 'Multiple url analysis')
  .option('-f, --files <files...>', 'Multiple files analysis')
  .option('-fl, --folders <folders...>', 'Multiple folders analysis')
  // RULES
  .option('-r, --rules <rules...>', 'Multiple rules')
  .parse(process.argv);

const options = program.opts();

if (!options.version) {
  analyzer(options);
}
