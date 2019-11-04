let { counter, increase, getCounter } = require('./1-exports');

console.log(counter); //0

increase();

console.log(counter); //0

//CommonJS是静态引用，值拷贝

//如果想获得内部变动，可以通过取值器函数
console.log(getCounter()); //1

