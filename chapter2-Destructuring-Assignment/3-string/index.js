
/*
* 字符串被转换成了一个类似数组的对象进行解构赋值
**/

const [a, b, c] = 'hello';
console.log(a); //h
console.log(b); //e
console.log(c); //l


let {length: len} = 'hello';
console.log(len); //5