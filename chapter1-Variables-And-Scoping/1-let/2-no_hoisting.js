/*
* 用var命令声明变量，会发生变量提升，提升只是指【声明部分】，【赋值部分】并不会提升
* */
console.log(foo);//undefined
foo = 'hello var!';
console.log(foo); //hello var!
var foo = 'var';

/*
* 用let声明的变量不会发生变量提升
* */
console.log(bar);
let bar = 'hello let!'; //ReferenceError