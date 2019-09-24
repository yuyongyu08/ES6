
/*
* 去重
*/

//数组
let arr = [1, 2, 3, 3, 4, 4, 5];

let newArr = [...new Set(arr)]; //方式1
let newArr1 = Array.from(new Set(arr));//方式2

console.log(newArr); //[ 1, 2, 3, 4, 5 ]
console.log(newArr1); //[ 1, 2, 3, 4, 5 ]


//字符串
let str = 'abccdde';

let newStr = [...new Set(str)].join('');
let newStr1 = Array.from(new Set(str)).join('');

console.log(newStr); //abcde
console.log(newStr1); //abcde

/*
* 去重的判断依据是恒等（===）
*/

let s = new Set();
let user1 = {name: 'yuyy'}, user2 = {name: 'yuyy'};
s.add(user1);
s.add(user2);
console.log(s); //Set { { name: 'yuyy' }, { name: 'yuyy' } }