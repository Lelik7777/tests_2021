const fs = require("fs");
fs.appendFile('hello.txt','\nadd new text to hello.txt '+new Date(),(err => {
    if(err) throw err;
    else {
        fs.readFile('hello.txt','utf8',((err,data)=>{
            if(err) throw err;
            console.log(data);
        }))
    }
}))