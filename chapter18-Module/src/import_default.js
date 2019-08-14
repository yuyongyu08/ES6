import all from './export'

console.log(all);
console.log(all.name);
console.log(all.age);

all.sayName();
all.sayAge();

let person = new all.Person('yyy');
person.sayName();

let student = new all.Student('yyy', 'Yanshan');
student.sayName();
student.saySchool();