#!/usr/bin/env node
const yargs = require(`yargs`);
const package = require(`../package.json`);

//Import fileFunctions
const fileFunctions = require("./fileFunctions");
const options = yargs
  .usage(`Usage: -i <path>`)
  .option(`input`, {
    alias: `i`,
    describe: `Path to file`,
    type: `string`,
    demandOption: true,
  })
  .option(`output`, {
    alias: `o`,
    describe: `Output directory for html parsed files`,
    type: `string`,
  })
  .help("h")
  .alias("h", "help")
  .version(`octo ${package.version}`)
  .alias(`v`, `version`).argv;

//Using fileFuntions methods
fileFunctions.addDirectory(options.output ? options.output : `./dist`);

fileFunctions.getPathInfo(
  `${options.input}`,
  `${options.output ? options.output : `./dist`}`
);
