
/*
*  为什么引入Map？
*  Object: key<string>:value ，key只能是string
*  Map: key<any>:value，key可以是任何类型，扩展更好
*  可以把Map看做是Object的超集
*/

/*
* 声明方式：2种
*/

//方式1：
let m1 = new Map();
m1.set('name', 'yuyy');
m1.set('gender', 'male');
m1.set('age', 18);

console.log(m1);



//方式2：
let m2 = new Map([
    ['name', 'yuyy'],
    ['gender', 'male'],
    ['age', 18]
]);

console.log(m2);

//不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数
let m3 = new Map(m2);
console.log(m3);

let set = new Set([
    ['name', 'yuyy'],
    ['gender', 'male'],
    ['age', 18]
]);
let m4 = new Map(set);
console.log(m4);