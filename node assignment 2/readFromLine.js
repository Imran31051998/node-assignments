const readline = require('readline');
const rl = readline.createInterface(
    process.stdin,process.stdout
);
rl.question('what is your name?',(name)=>{
    console.log("Hello",name);
    rl.close()
})