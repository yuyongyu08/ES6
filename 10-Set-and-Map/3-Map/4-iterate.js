let map = new Map();
map.set('name', 'yuyy');
map.set('gender', 'male');

//方法1：Map.prototype.keys()、Map.prototype.values()、Map.prototype.entries()，返回遍历器对象
for (let item of map.keys()){
    console.log('map.key:', item);
}

for (let item of map.values()){
    console.log('map.value:', item);
}

for (let item of map.entries()){
    console.log('map.entry:', item);
}


//方法2：Map.prototype.forEach()
map.forEach((item, key) => {
    console.log('map.forEach: ', item, key);
});