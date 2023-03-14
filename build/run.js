const { exec, execSync } = require('child_process');

exec('npm run serve', { cwd: './child-app-1' });

exec('npm run serve', { cwd: './child-app-2' });

execSync('npm run serve', { stdio: [0, 1, 2], cwd: './main-app' });
