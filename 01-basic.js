f5.length);#!/usr/bin/node
const log = console.log;
//初始化方法1
var buf1 = new buffer(256);
log('buf1 length',buf1.length);
log('buf1',buf1);

//初始化第一个字节
buf1[0] = 0x11;//十六进制

/*
 var buf2 = buf1.slice(250,256);
 log('buf2',buf2);
 */
//循环初始化
for(var i = 0;i<buf1.length;i++){
  buf1[i] = 1;
}
log('buf1',buf1);

// fill(填充数，开始下标，结束下标)
buf1.fill(0,0,256);

var buf2 = buf2.slice(250,256);
log('buf2',buf2);
log(buf2.tojson());
log(buf2.json.stringify(buf2));

//初始化方法2
var arr = ['a',0xba,0x00,255,10,0cdf];
var buf3 = new buffer(arr);
log('buf3',buf3);

//初始化方法3
var buf4 = new buffer('hello word!');
log('buf4',buf4);
//拷贝方法  4拷贝给3
buf4.copy(buf3,0,0,buf3.length);
log('',buf3);

//长度问题
var str = '你好 abcd';
var buf5 = new buffer(str);
log('buf5.length',buf5.length);
log('str.length',str.length);

