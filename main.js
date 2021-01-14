var nodemon = require('nodemon');
var dirname = "Bot-Discord_[TEST]"
var path =` ./Bot_folder/${dirname}/index.js`

const { spawn } = require("child_process");
const child = spawn('nodemon', [`--inspect=9230 ${path}`], {shell: true}); 

child.stdout.on('data', (data) => { 
    console.log(`${data}`); 
  }); 
    
  child.stderr.on('data', (data) => { 
    console.error(`${data}`); 
  }); 
    
  child.on('close', (code) => { 
    console.log(`child process exited with code ${code}`); 
    process.exit()
  }); 

  var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        // Display the message somewhere... (jQuery example)
        $(".output").text(message);
        realConsoleLog.apply(console, arguments);
    };
    var realConsoleError = console.error;
    console.error = function () {
        var message = [].join.call(arguments, " ");
        // Display the message somewhere... (jQuery example)
        $(".output").text(message);
        realConsoleError.apply(console, arguments);
    };

