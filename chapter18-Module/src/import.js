
/*
* export 直接导出的，import的时候必须要用{}；export default导出，import则不能用{}
**/

import {name, age, sayName, sayAge, Person, Student} from './export'

console.log(name);
console.log(age);

sayName();
sayAge();

let person = new Person('yyy');
person.sayName();

let student = new Student('yyy', 'Yanshan');
student.sayName();
student.saySchool();