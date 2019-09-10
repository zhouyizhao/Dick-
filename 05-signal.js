#!/usr/bin/node

process.on('SIGINT',()=>{
    console.log('you process ctrl+C or kill -2');
      process.exit();

});

process.on('SIGTSTP',()=>{
    console.log('you process ctrl+Z')

});

//未在后台运行的情况下，kill进程
process.stdin.resume();
