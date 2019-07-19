let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
console.log(foo);
console.log(bar);

/*
* 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，【变量必须与属性同名】，才能取到正确的值。
**/

let {baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz); //undefined

/*
* 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量，真正被赋值的是变量
**/
let {firstName: firstName1, secondName: secondName1} = {firstNameA: 'yu', secondName: {value: 'yongyu'}};
console.log('firstName1:', firstName1);
console.log('secondName1:', secondName1);



/*
* 对象解构也适用于嵌套结构
**/

let {
    p:[
        x,
        { y }
    ]
} = {p: ['hello', {y: 'world'}]};

console.log(x); //hello
console.log(y); // world
