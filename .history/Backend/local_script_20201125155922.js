const captureSpawn = require('capture-spawn')
const { spawn } = require('child_process')

spawn('git', ['log'], {
    stdio: 'inherit' // Will use process .stdout, .stdin, .stderr
  })