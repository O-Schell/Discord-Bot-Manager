const captureSpawn = require("capture-spawn");
const exec = require("child_process");





exec.exec(`nodemon --inspect test.js`,[], (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log("stderr",stderr); 
  console.log("stdout",stdout);  
});  

//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js
