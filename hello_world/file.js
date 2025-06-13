//const fs = require('fs');
//sync... call
//fs.writeFileSync('./test.txt','Hey vaibhav');

//async.... call
// fs.writeFile("./test.txt","hello vaibhav Async",(err)=>{});

//const fs = require('fs');

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err, result)=>{
//     if (err){
//         console.log("Error",err);
//     } else{
//         console.log(result);
//     }
// });


// fs.appendFileSync("./contacts.txt",new Date().getDate().toLocaleString());
//fs.appendFileSync("./test.txt",'${Date.now()} Hey There!\n');

//fs.cpSync('./test.txt','./copy.txt');

// fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));
// fs.mkdirSync('my-docs/a/b',{recursive:true});

const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);