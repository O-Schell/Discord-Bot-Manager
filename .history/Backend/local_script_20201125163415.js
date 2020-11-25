const captureSpawn = require('capture-spawn')
const test = require('./test.js');
const exec = require('child_process');  


exec.exec('test.js', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log("stderr",stderr); 
  console.log("stdout",stdout);  
});  