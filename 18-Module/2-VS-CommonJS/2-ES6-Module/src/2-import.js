import { counter, increase } from './1-export'

console.log('before: ', counter); //0

increase();

console.log('after: ', counter); //1

//ES6 Module是动态加载，动态引用