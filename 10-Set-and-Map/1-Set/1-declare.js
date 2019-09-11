
/*
* 声明方式：2种
*/

//方式1：不传参，用add()增加成员
let s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(3);
s1.add(4);
s1.add(4);
s1.add(5);

console.log(s1); //Set { 1, 2, 3, 4, 5 }


//方式2：传入数组（或者具有iterable接口的其他数据结构）作为参数
let s2 = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(s2); //Set { 1, 2, 3, 4, 5 }


function getLikeArray() {
    return arguments
}
let s3 = new Set(getLikeArray(1, 2, 3, 3, 4, 4, 5));
console.log(s3); //Set { 1, 2, 3, 4, 5 }