
/*
* 草案
* match()，返回所有匹配组成的数组
* matchAll()
**/
let s = 'hello world!';

console.log(s.match(/l/)); //[ 'l', index: 2, input: 'hello world!' ]
console.log(s.match(/l/g)); //[ 'l', 'l', 'l' ]

console.log(s.matchAll(/l/g));