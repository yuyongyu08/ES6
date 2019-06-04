/*
* 解构赋值允许指定默认值
* */

let [x, y = 2] = [1];
console.log(x); //1
console.log(y); //2


/*
* ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
*
* */
let [a = 1] = [undefined];
let [b = 2] = [null];
console.log(a); //1
console.log(b); //null

/*
* 默认值是表达式，那么表达式是惰性求值：只有用到才会计算
* */
function getData() {
    return 'c'
}
let [c = getData()] = [3];
let [d = 3] = [getData()];
console.log(c); //3
console.log(d); //c


let [e = 4, f = e] = [5, 6];
console.log(e); //5
console.log(f); //6

let [g = h, h= 7] = [7, 8];
console.log(g); //7
console.log(h); //8

let [k = j, j= 9] = []; //ReferenceError: h is not defined
