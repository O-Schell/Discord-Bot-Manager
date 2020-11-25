const captureSpawn = require("capture-spawn");

const readline = require("readline");
const exec = require("child_process");


const test = prompt('Can I have the path to your main script ?\n');
console.log("Path: ", test)


exec.exec(`${`my.bat`, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log("stderr",stderr); 
  console.log("stdout",stdout);  
});  

//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js
