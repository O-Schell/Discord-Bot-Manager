const captureSpawn = require('capture-spawn')
const prompts = require('prompts');
const exec = require('child_process');  

/*
const test = prompt('Can I have the path to your main script ?\n');
console.log("Path: ", test)
*/
 
(async () => {
    const response = await prompts({
      type: 'number',
      name: 'value',
      message: 'How old are you?',
      validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });
   
    console.log(response); // => { value: 24 }
  })();
/*
exec.exec(`${test}`, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log("stderr",stderr); 
  console.log("stdout",stdout);  
});  
*/
//C:\\Users\\O'Schell wokspace\\Google Drive\\Famille\\Schell\\Gaby\\For fun\\Code\\Projects\\NodeJS\\AM2_Discord_Bot\\Bot-Discord [TEST]\\index.js