const captureSpawn = require('capture-spawn')
const { spawn } = require('child_process')

spawn('git', ['log']).stdout.pipe(process.stdout)