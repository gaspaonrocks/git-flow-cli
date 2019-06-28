const { execSync } = require('child_process');

const message = "This is status";

let data = execSync('git status', { encoding: 'utf8' }, (err, stdout, stderr) => {
    if (err) console.error(err);
    if (stderr) console.error(stderr);
    if (stdout) return stdout;
});

module.exports = {
    message,
    data,
}