import { counter, increase } from './1-export'

console.log(counter); //0

increase();

console.log(counter); //1

//ES6 Module是动态加载，动态引用