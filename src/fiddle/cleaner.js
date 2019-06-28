module.exports = (proc) => {
    const internalProc = proc;
    return {
        cleanScreen: () => internalProc.stdout.write('\x1Bc'),
        removeKeyPress: () => internalProc.stdin.removeAllListeners('keypress'),
        exitProc: () => internalProc.exit(),
    };
}