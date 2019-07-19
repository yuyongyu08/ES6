
/*
* 1、String.fromCharCode()，返回Unicode码点对应字符，无法识别大于0xFFFF
* */

console.log(String.fromCharCode(0x20bbf));

//0x20BB7大于0xFFFF，就发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。

/*
* 2、String.fromCodePoint()，返回Unicode码点对应字符可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足
* */

console.log(String.fromCodePoint(0x20bbf));


//可以有多个参数，则它们会被合并成一个字符串返回
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));


/*
* 3、String.raw()，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，常用于模板字符串的处理
* */

console.log(`hello\nworld`);
console.log(String.raw`hello\nworld`); //保证转义字符不被转义