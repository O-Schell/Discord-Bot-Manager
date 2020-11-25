const captureSpawn = require("capture-spawn");
const { spawn } = require("child_process");

var path = "C:\Users\O'Schell wokspace\Google Drive\Famille\Schell\Gaby\For fun\Code\Projects\NodeJS\AM2_Discord_Bot\Bot-Discord [TEST]\index.js"
var options = "--inspect=9230"

// using `spawn` as example, can use other functions like `fork`, etc
// https://nodejs.org/api/child_process.html

function spawnNodemon() {
  const cp = spawn('nodemon', [`${path}`], {
    // the important part is the 4th option 'ipc'
    // this way `process.send` will be available in the child process (nodemon)
    // so it can communicate back with parent process (through `.on()`, `.send()`)
    // https://nodejs.org/api/child_process.html#child_process_options_stdio
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });

  return cp;
}

var app = spawnNodemon();

app.on('message', function (event) {
  if (event.type === 'start') {
    console.log('nodemon started');
  } else if (event.type === 'crash') {
    console.log('script crashed for some reason');
  }
});

// force a restart
app.send('restart');

// force a quit
app.send('quit');
//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js

//child.kill('SIGINT');