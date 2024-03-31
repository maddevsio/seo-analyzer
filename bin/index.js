#!/usr/bin/env node
const { Command } = require('commander');
const ver = require('./version');
const analyzers = require('./analyzers');

const program = new Command();

program
  .option('-v, --version', 'Show version', ver, '')
  .option('-u, --urls <urls...>', 'Multiple url analysis')
  .option('-f, --files <files...>', 'Multiple files analysis')
  .option('-fl, --folders <folders...>', 'Multiple folders analysis')
  .option('-iu, --ignore-urls <ignoreUrls...>', 'Multiple ignore urls')
  .option('-if, --ignore-files <ignoreFiles...>', 'Multiple ignore files')
  .option('-r, --rules <rules...>', 'Multiple rules')
  .option(
    '-ifl, --ignore-folders <ignoreFolders...>',
    'Multiple ignore folders'
  )
  .parse(process.argv);

const options = program.opts();

analyzers(options);
