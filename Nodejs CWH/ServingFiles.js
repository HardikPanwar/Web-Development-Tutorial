const http = require('http');
const fs = require('fs');
const filecontent=fs.readFileSync('Node js Tutorial/blck$nonblocking.js')
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-type':'text/html'});
  res.end(filecontent)
})
server.listen(80,'127.0.0.1', ()=>{
    console.log("listening to the port 80");
})