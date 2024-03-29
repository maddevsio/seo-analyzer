#!/usr/bin/env node
const { Command } = require('commander');
const ver = require('../src/version');

const program = new Command();

program.option('-v, --version', 'show version', ver, '').parse(process.argv);
