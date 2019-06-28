import * as readline from 'readline';
import { fork } from 'child_process';

import { IndexManager } from './index-manager';
import { base, branch, checkout, log, status } from "./commands";
import { cleaningStuff, makeMyMessageHorizontal, makeMyMessageVertical } from './utils';

const forked = fork('./src/fork.ts', ['-r', 'ts-node/register']);
const cleaner = cleaningStuff(process);

readline.emitKeypressEvents(process.stdin);
process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);

const mapping = {
    base,
    branch,
    checkout,
    log,
    status,
}

export const selectAction = ({ message, data }) => {
    cleaner.removeKeyPress();
    cleaner.cleanScreen();

    IndexManager.resetValue().setLimit(data.length);

    process.stdin.on('keypress', (str, key) => {
        if ((key.ctrl && key.name === 'c') || key.name === 'escape') {
            cleaner.cleanScreen();
            cleaner.exitProc();
        } else {
            if (key.name === 'backspace') {
                selectAction(base);
            } else if (key.name === 'up') {
                cleaner.cleanScreen();
                forked.send({ message, data: makeMyMessageHorizontal(data, IndexManager.unshiftValue().getValue()), execute: false });
            } else if (key.name === 'down') {
                cleaner.cleanScreen();
                forked.send({ message, data: makeMyMessageHorizontal(data, IndexManager.shiftValue().getValue()), execute: false });
            } else if (key.name === 'return') {
                selectAction(mapping[data[IndexManager.getValue()]]);
            }
        }
    });

    cleaner.cleanScreen();
    forked.send({ message, data: makeMyMessageHorizontal(data, IndexManager.getValue()) });
};

selectAction(base);