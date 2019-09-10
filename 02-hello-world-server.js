#!/usr/bin/node
const http = require('http');

http.createServer((req,res)=>{
    res.end('hi!')

}).listen(80880);
