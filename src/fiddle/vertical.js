const { fork } = require('child_process');
const readline = require('readline');

const forked = fork('./src/fiddle/forky');
const { IndexManager } = require('./index-managy');
const cleaningStuff = require('./cleaner');
const { horizontal, vertical } = require('./messagy');
const base = require('./base');
const status = require('./status');

const cleaner = cleaningStuff(process);

readline.emitKeypressEvents(process.stdin);
process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);

const selectActionVertical = ({ message, data }) => {
    cleaner.removeKeyPress();
    cleaner.cleanScreen();

    IndexManager.resetValue().setLimit(data.length);

    process.stdin.on('keypress', (str, key) => {
        if ((key.ctrl && key.name === 'c') || key.name === 'escape') {
            cleaner.cleanScreen();
            cleaner.exitProc();
        } else {
            if (key.name === 'backspace') {
                cleaner.cleanScreen();
                selectActionVertical(base);
            } else if (key.name === 'up') {
                cleaner.cleanScreen();
                forked.send({ message, data: vertical(data, IndexManager.unshiftValue().getValue()), execute: false });
            } else if (key.name === 'down') {
                cleaner.cleanScreen();
                forked.send({ message, data: vertical(data, IndexManager.shiftValue().getValue()), execute: false });
            } else if (key.name === 'return') {
                selectActionVertical(status);
            }
        }
    });

    cleaner.cleanScreen();
    forked.send({ message, data: vertical(data, IndexManager.getValue()) });
};

selectActionVertical(base);