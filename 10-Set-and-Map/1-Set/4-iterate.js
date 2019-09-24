
/*
* 遍历方法：
*/

let s = new Set(['red', 'yellow', 'blue']);


//方法1：Set.prototype.keys()、Set.prototype.values()、Set.prototype.entries()，返回遍历器对象
for (let item of s.keys()){
 console.log('s.key:', item);
}

for (let item of s.values()){
    console.log('s.value:', item);
}

for (let item of s.entries()){
    console.log('s.entry:', item);
}

//方法2：Set.prototype.forEach()
s.forEach((item) => {
    console.log('s.forEach: ', item);
})


/*
* 应用：转成数组后，使用数组的内置方法
*/

let s1 = new Set([1, 2, 3]);
let s2 = new Set([3, 4, 5]);

//交集
let intersect = new Set([...s1].filter((i) => s2.has(i)));
console.log(intersect); //Set { 3 }

//并集
let union = new Set([...s1, ...s2]);
console.log(union); //Set { 1, 2, 3, 4, 5 }

//补集
let arr1 = [...s1].filter((i) => !s2.has(i)), arr2 = [...s2].filter((i) => !s1.has(i));
let difference = new Set([...arr1, ...arr2]);
console.log(difference); //Set { 1, 2, 4, 5 }






