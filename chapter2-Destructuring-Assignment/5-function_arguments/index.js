
/*
* 函数参数也可以解构赋值
* */
let arr = [
    [1,2],
    [3,4]
];

let arr1 = arr.map(item => item[0] + item[1]);
let arr2 = arr.map(([a, b]) => a + b);
console.log(arr1); //[3, 7]
console.log(arr2);//[3, 7]


/*
* 函数参数解构赋值也可以使用默认值
* */

function createArray1({x = 0, y = 0} = {}) {
    return [x, y]
}

function createArray2({x, y} = {x: 0, y: 0}) {
    return [x, y]
}

console.log(createArray1({x: 3})); //[ 3, 0 ]
console.log(createArray2({x: 3})); //[ 3, undefined ]

//createArray1的参数是对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
//createArray2是为参数指定默认值，而不是为变量x和y指定默认值。？？？