const http=require('http');

http.createServer((request,responce)=>{
    responce.end('change data: new text from server');
}).listen(3000,'127.0.0.1',()=>{
    console.log('server listening');
})