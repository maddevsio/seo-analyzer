#!/usr/bin/env node
const { Command } = require('commander');
const ver = require('./version');
const urls = require('./urls');

const program = new Command();

program
  .option('-v, --version', 'show version', ver, '')
  .option('-u, --urls <url...>', 'analyze urls')
  .parse(process.argv);

const options = program.opts();

if (options.urls) {
  urls(options.urls);
}
