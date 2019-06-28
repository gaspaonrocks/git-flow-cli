const chalk = require('chalk');

const vertical = (input, inpIndex) => Array.isArray(input) ? input.reduce((prev, curr, index) => {
    return prev + (inpIndex === index ? chalk.cyan(`> ${curr}\n`) : `  ${curr}\n`);
}, '') : input;

const horizontal = (input, inpIndex) => Array.isArray(input) ? input.reduce((prev, curr, index) => {
    return prev + (inpIndex === index ? ` ${chalk.red(curr)} |` : ` ${curr} |`);
}, '|') : input;

module.exports = { horizontal, vertical };