import { execSync } from 'child_process';

import { sanitizeBranches2 } from "../utils"

const message = "this is checkout, where to ?";

// ts-ignore-next-line
const localBranches = sanitizeBranches2(execSync('git branch', { encoding: 'utf8' }));

export default {
    message,
    data: localBranches,
}