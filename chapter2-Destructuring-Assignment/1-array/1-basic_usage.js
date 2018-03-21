/*
* 解构（Destructuring）赋值:从数组和对象中提取值，对变量进行赋值
**/

let [a, b, c] = [1, 2, 3];
console.log(a); //1
console.log(b); //2
console.log(c); //3


/*
* 只要等号两边的模式相同，左边的变量就会被赋予对应的值
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
console.log(me); //[]  为什么？