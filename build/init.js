const { exec, execSync } = require('child_process');

execSync('npm i', { stdio: [0, 1, 2], cwd: './child-app-1' });

execSync('npm i', { stdio: [0, 1, 2], cwd: './child-app-2' });

execSync('npm i', { stdio: [0, 1, 2], cwd: './main-app' });
