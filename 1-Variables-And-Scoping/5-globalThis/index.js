/*
* 全局对象：
* 1.浏览器：window
* 2.浏览器、Web Worker：self
* 3.node：global
* */


/*
* this:
* 1.浏览器：指向window
* 2.node：返回当前模块
* 3.单纯的函数运行：严格模式下，返回undefined；非严格模式，返回全局对象
* */



console.log(this == global);

console.log(this);


/*
* 提案：globalThis
* 任何环境下都存在，指向全局环境的this
* */