
/*
* 1.对于已经声明的变量解构赋值
* */

let x,y;

// {x, y} = {x: 1, y:2}; //SyntaxError，原因：js引擎会将{x, y}视为代码块，后面出现赋值就会报错

//解决办法：

({x, y} = {x: 1, y:2});

console.log(x, y); //1 2


/*
* 数组本质上还是对象，因此数组可以进行对象属性的解构赋值
* */

let arr = [1, 2, 3];

let {0: first, [arr.length-1]: last} = arr;

console.log(first, last); //1 3