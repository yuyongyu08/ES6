
/*
* 属性
*/
let  s = new Set();

//1.Set.prototype.constructor
console.log(s.constructor); //[Function: Set]

//2.Set.prototype.size
console.log(s.size); // 0


/*
* 方法
*/

//1.Set.prototype.add(value)
s.add('yuyy');
s.add('yyy');
console.log(s.size); //1
console.log(s); //Set { 'yuyy', 'yyy' }

//2.Set.prototype.has(value)
console.log(s.has('yuyy')); //true

//3.Set.prototype.delete(value)
console.log(s.delete('yuyy')); //true
console.log(s); //Set { 'yyy' }

//4.Set.prototype.clear(value)
s.clear();
console.log(s); //Set {}
console.log(s.size); //0