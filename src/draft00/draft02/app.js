const fs = require("fs");
fs.appendFile('text.txt',`\nadd new text at ${new Date().getUTCDate()}`,(er)=>{
    if(er) throw er;
    fs.readFile('text.txt',"utf8",(er,data)=>{
        console.log(data);
    })
});
