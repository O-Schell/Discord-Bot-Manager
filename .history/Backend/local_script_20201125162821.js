const captureSpawn = require('capture-spawn')
const test = require('./test.js');
const exec = require('child_process').exec;  


exec(test, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  