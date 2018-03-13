console.log(foo); //undefined ,变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined
var foo = 'hello var!';

console.log(bar);
let bar = 'hello let!'; //ReferenceError