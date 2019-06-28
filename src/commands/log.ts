import { execSync } from 'child_process';

const message = "This is log";

// ts-ignore-next-line
const data = execSync('git log', { encoding: 'utf8' });

export default {
    message,
    data,
}