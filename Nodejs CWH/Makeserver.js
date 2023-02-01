//How to run program in browser
//minimal API formation 
//how to make node js server
var http = require('http');
http.createServer(function(req,res){
res.write("hello from node js hello ");
res.end();
}).listen(5000);