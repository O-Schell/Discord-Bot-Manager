const captureSpawn = require("capture-spawn");
const { spawn } = require("child_process");

var path = "C:/Users/O'Schell wokspace/Google Drive/Famille/Schell/Gaby/For fun/Code/Projects/NodeJS/AM2_Discord_Bot/Bot-Discord [TEST]/index.js"
var options = "--inspect=9230"

var nodemon = require('nodemon');

nodemon({ script: `path` }).on('start', function () {
  console.log('nodemon started');
}).on('crash', function () {
  console.log('script crashed for some reason');
});

// force a restart
nodemon.emit('restart');

// force a quit
nodemon.emit('quit');

//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js
//child.kill('SIGINT');