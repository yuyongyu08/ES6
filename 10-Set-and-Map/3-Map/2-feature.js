let map = new Map();
map.set('name', 'yuyy');
map.set('gender', 'male');
map.set('age', 18);

console.log(map);

//如果对同一个键多次赋值，后面的值将覆盖前面的值
console.log(map.get('age'));
map.set('age', 19);
map.set('age', 20);
console.log(map.get('age')); //20


//如果读取一个未知的键，则返回undefined
console.log(map.get('job')); //undefined


//如果Map的键是【引用类型】的值（对象、数组），实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
let prop1 = {
    text: 'job'
};

let prop2 = {
    text: 'job'
};

map.set(prop1, 'programmer');
map.set(prop2, 'developer');

console.log(map.get(prop1)); //programmer
console.log(map.get(prop2)); //developer



//如果Map的键是一个【简单类型】的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键

console.log(0 === -0); //true

map.set(0, 'zero');
map.set(-0, '-zero');

console.log(map.get(0)); //-zero