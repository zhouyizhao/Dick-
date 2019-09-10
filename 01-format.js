#!/usr/bin/node

const log = console.log;

var sh = {
    'name':'司涵',
      'qq':'12333',
        'age':19

};

log('name:%s',sh.name);
log('age:%d',sh.age);
log('sh info:%j',sh);

log('name:',sh,name);
log(`age id ${sh.age}`);
