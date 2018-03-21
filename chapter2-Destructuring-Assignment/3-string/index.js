/*
* 字符串被转换成了一个类似数组的对象进行解构赋值
**/

const [a, b, c, d, e] = 'hello';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let {length: len} = 'hello';
console.log(len);