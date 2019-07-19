let {message: msg = 'hello world!'} = {};
console.log(msg); //hello world!


/*
* 默认值生效的条件：属性值严格等于undefined（为什么？ES6内部使用严格相等运算符===判断属性值是否有值）
*
* */

let {x = 1, y = 2} = {x: undefined, y: null};
console.log(x); //1
console.log(y); //null