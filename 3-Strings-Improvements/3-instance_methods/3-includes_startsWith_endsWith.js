
/*
* includes()：返回布尔值，表示是否找到了参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在原字符串的【头部】。
* endsWith()：返回布尔值，表示参数字符串是否在原字符串的【尾部】。
* */

let msg = `hello world`;

console.log(msg.includes('llo')); //true
console.log(msg.startsWith('he')); //true
console.log(msg.endsWith('rld')); //true