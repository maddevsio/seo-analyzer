#!/usr/bin/env node
const { Command } = require('commander');
const ver = require('./version');
const urls = require('./urls');

const program = new Command();

program
  .option('-v, --version', 'Show version', ver, '')
  .option('-u, --urls <urls...>', 'Multiple url analysis')
  .parse(process.argv);

const options = program.opts();

if (options.urls) {
  urls(options.urls);
}
