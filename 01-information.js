#!/usr/bin/node

const log = console.log;

log('CPU',process.arch);
log('OS',process.platform);
log('PID',process.pid);
log('execPath',process.execPath);
/*
 * process.stdin.on('data',function (data){
 *   log(data);
 *     )}*/
log('Version',process.version);
log('uid',process.getuid);
log('git',process.getgid);
 
