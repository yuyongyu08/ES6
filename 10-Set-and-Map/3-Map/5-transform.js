/*
* Array VS Map
*/
//Array => Map
let arr = [['name', 'yuyy'], ['gender', 'male']];
let map_1 = new Map(arr);
console.log(map_1); //Map { 'name' => 'yuyy', 'gender' => 'male' }

//Map => Array
let arr_1 = [...map_1];
console.log(arr_1); //[ [ 'name', 'yuyy' ], [ 'gender', 'male' ] ]

let arr_2 = Array.from(map_1);
console.log(arr_2); //[ [ 'name', 'yuyy' ], [ 'gender', 'male' ] ]


/*
* Object VS Map
*/
//【Object => Map】
let obj = {
    name: 'yuyy',
    gender: 'male'
};
let map_2 = new Map();
Object.keys(obj).forEach(key => {
    map_2.set(key, obj[key])
});
console.log(map_2); //Map { 'name' => 'yuyy', 'gender' => 'male' }


//【Map => Object】
let obj_1 = Object.create(null);
map_2.forEach((item, key) => {
    obj_1[key] = item
});
console.log(obj_1); //[Object: null prototype] { name: 'yuyy', gender: 'male' }


/*
* JSON VS Map
*/
//JSON => Map

//Map => JSON