const { exec, execSync } = require('child_process');

execSync('npm run build', { stdio: [0, 1, 2], cwd: './child-app-1' });

execSync('npm run build', { stdio: [0, 1, 2], cwd: './child-app-2' });

execSync('npm run build', { stdio: [0, 1, 2], cwd: './main-app' });
