#!/usr/bin/node
const log=console.log;
var data = process.argv[2];
        
var buf = new Buffer(data,'base64');
var info = buf.toString('utf8').split(':');
log('usr:%s,pwd:%s',info[0],info[1]);
