import { spawn } from "child_process";

// export function runCommand(command: string, args: string[] = []): void {
//   const options = { stdio: "inherit" };
//   spawn(command, args, options);
// }

export * from "./checkDependencies"; //::noqa

/**
 * // scripts/start.ts
 * import { spawn } from "child_process";

const args = ["start"];
const options = { stdio: "inherit" };
spawn("npm", args, options); */

/**scripts/build.ts
import { spawn } from 'child_process';

const args = ['run', 'build'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/test.ts
import { spawn } from 'child_process';

const args = ['test'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/lint.ts
import { spawn } from 'child_process';

const args = ['run', 'lint'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/format.ts
import { spawn } from 'child_process';

const args = ['run', 'format'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/** scripts/analyze.ts
import { spawn } from 'child_process';

const args = ['run', 'analyze'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/deploy.ts
import { spawn } from 'child_process';

const args = ['run', 'deploy'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/storybook.ts
import { spawn } from 'child_process';

const args = ['run', 'storybook'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */

/**scripts/cypress-open.ts(cypress:open: Open Cypress for end-to-end testing)
import { spawn } from 'child_process';

const args = ['run', 'cypress:open'];
const options = { stdio: 'inherit' };
spawn('npm', args, options);
 */
