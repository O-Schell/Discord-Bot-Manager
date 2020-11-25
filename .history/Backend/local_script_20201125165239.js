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
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  }
];
 
(async () => {
  const response = await prompts(questions);
 
  // => response => { username, age, about }
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