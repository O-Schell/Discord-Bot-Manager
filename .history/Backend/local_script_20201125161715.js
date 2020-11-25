const captureSpawn = require('capture-spawn')
const { spawn } = require('child_process');

const { spawn } = require('./test.js');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});