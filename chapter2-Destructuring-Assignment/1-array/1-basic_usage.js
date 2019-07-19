
/*
* 解构（Destructuring）赋值:从数组和对象中提取值，对变量进行赋值
**/

let [a, b, c] = [1, 2, 3];
console.log(a); //1
console.log(b); //2
console.log(c); //3


/*
* 完全解构（模式匹配）：只要等号两边的模式相同，左边的变量就会被赋予对应的值
**/

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [, , third] = ['foo', 'bar', 'baz'];
console.log(third); //baz


let [x, , y] = [1, 2, 3];
console.log(x); //1
console.log(y); //3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); //1
console.log(tail); //[2,3,4]

let [you, he, ...me] = ['a'];
console.log(you); //a
console.log(he); //undefined 解构不成功，变量的值就等于undefined。
console.log(me); //[]  为什么？扩展运算符（...）操作空数组（[]）没有返回任何东西

/*
* 不完全解构：只有部分模式匹配，匹配不到的变量值等于undefined
* */

let [A, [B, C], D] = [1, [2], 3];

console.log(B); //2
console.log(C); //undefined
console.log(D); //3


/*
* 解构失败原因：
* 1.等号右边的值转化为对象后不具备Iterator接口
* 2.等号右边的值本身就不具备Iterator接口
*
* */

let [foo1] = 1;
let [foo2] = false;
let [foo3] = NaN;
let [foo4] = undefined;
let [foo5] = null;
let [foo6] = {};


/*
*  任何具有Iterator接口的数据结构，都可以采用【数组】形式的解构赋值。
* */

let [h, j, k] = new Set(['1', 2, '3']);
console.log(h, j, k); //1 2 3



