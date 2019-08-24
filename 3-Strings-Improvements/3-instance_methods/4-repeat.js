
/*
* repeat(n)，将原字符串重复拼接n次后返回，n一般为【正整数】
* */
let s = 'bla';

console.log(s.repeat(3)); //blablabla

//参数如果是[1，Infinity)，则会向下取整
console.log(s.repeat(3.9)); //blablabla

//参数如果是在(-1,1)之间，则会取0
console.log(s.repeat(0.9)); //""
console.log(s.repeat(0));//""
console.log(s.repeat(-0.9));//""


console.log(s.repeat(NaN)); //""

//参数[-Infinity, -1]或者Infinity，会报错
console.log(s.repeat(Infinity)); //RangeError: Invalid count value
console.log(s.repeat(-3.9)); //RangeError: Invalid count value

//[-Infinity, -1](-1,1)[1，Infinity)[Infinity]