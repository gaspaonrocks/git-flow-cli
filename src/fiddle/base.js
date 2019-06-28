const { IndexManager } = require('./index-managy');
const { vertical } = require('./messagy');

const message = "What do you want to do ?";

const data = ['add', 'branch', 'checkout', 'commit', 'log', 'merge', 'rebase', 'status'];

const keyboardsEvents = (forky) => {
    /* process.stdin.on('keypress', (str, key) => {
        if ((key.ctrl && key.name === 'c') || key.name === 'escape') {
            process.stdout.write('\x1Bc');
            process.exit();
        } else {
            if (key.name === 'up') {
                process.stdout.write('\x1Bc');
                forky.send({ message, data: vertical(choices, IndexManager.unshiftValue().getValue()), execute: false });
            } else if (key.name === 'down') {
                process.stdout.write('\x1Bc');
                forky.send({ message, data: vertical(choices, IndexManager.shiftValue().getValue()), execute: false });
            } else if (key.name === 'return') { }
        }
    }); */
}

module.exports = {
    message,
    data,
    keyboardsEvents,
}