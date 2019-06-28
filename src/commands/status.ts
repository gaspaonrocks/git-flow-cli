import { execSync } from 'child_process';

const message = "This is status";

// ts-ignore-next-line
const data = execSync('git status', { encoding: 'utf8' });

export default {
    message,
    data,
}