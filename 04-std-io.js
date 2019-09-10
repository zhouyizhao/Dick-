#!/usr/bin/node

const msg = ['name','email','qq','mobile'];
var usr= {},i = 0;

console.log(mag[i] + ':');

process.stdin.on('data',function(data){
    usr[msg[i]] = data.slice(0,data.length-1).toString('utf8');

      console.log(msg[++i] + ':');


});

process.stdin.on('end',()=>{
    console.log(usr);

})
