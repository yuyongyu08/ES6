/*
* 从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
* 1.var命令和function命令声明的全局变量，依旧是顶层对象的属性
* 2.let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
* */

var a = 1;

console.log(global.a); //undefined

let b = 2;

console.log(global.b); //undefined