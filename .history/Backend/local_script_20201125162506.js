const captureSpawn = require('capture-spawn')
const { spawn } = require('child_process');

const test = require('./test.js');

const HelloWorld = spawn(test, 'test');

HelloWorld.stdout.on('data', (data) => {
  console.log(`Result: ${data}`);
});