const captureSpawn = require("capture-spawn");
const spawn = require("child_process").exec;

var path = "C:\Users\O'Schell wokspace\Google Drive\Famille\Schell\Gaby\For fun\Code\Projects\NodeJS\AM2_Discord_Bot\Bot-Discord [TEST]\index.js"
var command = `nodemon `

console.log(command)

const child = spawn('nodemon', [`--inspect ${path}`], {shell: true}); 

child.stdout.on('data', (data) => { 
    console.log(`stdout: ${data}`); 
  }); 
    
  child.stderr.on('data', (data) => { 
    console.error(`stderr: ${data}`); 
  }); 
    
  child.on('close', (code) => { 
    console.log(`child process exited with code ${code}`); 
  }); 

//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js
