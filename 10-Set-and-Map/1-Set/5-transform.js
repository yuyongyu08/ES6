
// Array => Set
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(set);

// Set => Array
// 方法1：
let arr_1 = [...set];
console.log(arr_1);

// 方法2：
let arr_2 = Array.from(set);
console.log(arr_2);


/*
* String VS Set， 借助Array作为中转
**/

// String => Set
let str = 'hello';
let set_s = new Set(str);
console.log(set_s);

// Set => String
let str_1 = [...set_s].join('');
console.log(str_1);

let str_2 = Array.from(set_s).join('');
console.log(str_2);