let map = new Map();
map.set('name', 'yuyy');
map.set('gender', 'male');


/*
* 属性
**/

//size
console.log(map.size); //3

/*
* 方法
**/

//Map.prototype.set(key, value)
console.log(map.set('age', 18)); //Map { 'name' => 'yuyy', 'gender' => 'male', 'age' => 18 }

//Map.prototype.get(key)
console.log(map.get('age'));

//Map.prototype.has(key)
console.log(map.has('age'));

//Map.prototype.delete(key)
console.log(map.delete('age')); //true

//Map.prototype.clear()
console.log(map.clear()); //undefined
console.log(map); //Map {}