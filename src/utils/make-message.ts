import chalk from "chalk";

export const makeMyMessageHorizontal = (input, inpIndex) => Array.isArray(input) ? input.reduce((prev, curr, index) => {
    return prev + (inpIndex === index ? ` ${chalk.red(curr)} |` : ` ${curr} |`);
}, '|') : input;

export const makeMyMessageVertical = (input, inpIndex) => Array.isArray(input) ? input.reduce((prev, curr, index) => {
    return prev + (inpIndex === index ? chalk.cyan(`> ${curr}\n`) : `  ${curr}\n`);
}, '') : input;