import { execSync } from 'child_process';

const message = "These are local branches";

// ts-ignore-next-line
const data = execSync('git branch', { encoding: 'utf8' });

export default {
    message,
    data,
}