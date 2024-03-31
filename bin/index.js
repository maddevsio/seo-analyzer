#!/usr/bin/env node
const { Command } = require('commander');
const version = require('./version');
const analyzer = require('./analyzer');

const program = new Command();

program
  .option(
    '-v, --version',
    'Display Application Version: Displays the current version of the application.'
  )
  // IGNORES
  .option(
    '-iu, --ignore-urls <ignoreUrls...>',
    'Exclude Specific URLs from Analysis: Excludes certain URLs from analysis to avoid processing unwanted web pages.'
  )
  .option(
    '-if, --ignore-files <ignoreFiles...>',
    'Exclude Specific Files from Analysis: Allows excluding certain files from analysis, preventing their processing.'
  )
  .option(
    '-ifl, --ignore-folders <ignoreFolders...>',
    'Exclude Specific Folders from Analysis: Excludes specified folders from the analysis process, ignoring all files within those folders.'
  )
  // INPUTS
  .option(
    '-u, --urls <urls...>',
    'Perform SEO Analysis on Specified URLs: Conducts SEO analysis for specified URLs, checking their compliance with certain SEO criteria.'
  )
  .option(
    '-f, --files <files...>',
    'Perform SEO Analysis on Specified Files: Performs SEO analysis on specified files, ensuring their adherence to optimization standards and rules.'
  )
  .option(
    '-fl, --folders <folders...>',
    'Perform SEO Analysis on Specified Folders: Analyzes all files within specified folders for compliance with SEO rules and recommendations.'
  )
  // RULES
  .option(
    '-r, --rules <rules...>',
    'Apply Specific SEO Rules for Analysis: Applies specific SEO rules during analysis, allowing the user to customize the inspection process.'
  )
  .parse(process.argv);

const options = program.opts();

if (!Object.keys(options).length) {
  program.outputHelp();
} else if (options.version) {
  version();
} else {
  analyzer(options);
}
