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
  .parse(process.argv);

const options = program.opts();

analyzers(options);
