const captureSpawn = require('capture-spawn')
const prompts = require('prompts');
const exec = require('child_process');  

/*
const test = prompt('Can I have the path to your main script ?\n');
console.log("Path: ", test)
*/
 
const questions = [
    {
      type: 'text',
      name: 'dish',
      message: 'Do you like pizza?'
    },
    {
      type: prev => prev == 'pizza' ? 'text' : null,
      name: 'topping',
      message: 'Name a topping'
    }
  ];
   
  (async () => {
    const response = await prompts(questions);
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