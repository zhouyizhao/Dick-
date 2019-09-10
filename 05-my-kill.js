#!/usr/bin/node

var pid =process.argv[2],
        sgn =process.argv[2];
process.kill(pid,sgn)
