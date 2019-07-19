
/*
* 解构赋值时，如果等号右边是数字和布尔值，则会先转成对象
* */

let {toString: n} = 123;
console.log(n === Number.prototype.toString); //true

let {toString: b} = true;
console.log(b === Boolean.prototype.toString); //true

/*
* 解构赋值的规则：只要等号右边的值不是【对象】和【数组】，都先将其转对象
* */

let {prop: x} = undefined; //TypeError: Cannot destructure property `prop` of 'undefined' or 'null'.
let {prop: y} = null;

//undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。