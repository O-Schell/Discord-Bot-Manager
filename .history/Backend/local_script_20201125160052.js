const captureSpawn = require('capture-spawn')
const { execFile } = require('child_process')

execFile('git', ['log'], (err, out) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log(out)
  }
})