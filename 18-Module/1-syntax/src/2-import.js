
/*
* 方式1：*方式，整体导入，用*指定一个对象，所有的输出都挂载到此对象上
*/

import * as all from './1-export';
all.sayName();
all.sayAge();

/*
* 方式2：{}方式，选择性导入，【{}中的变量名要与导出的名称相同】；export default导出，import则不能用{}
**/
import { age, name, job, person, student, sayName, Student } from './1-export'

console.log(age);
console.log(name);
console.log(job);
console.log(person);
console.log(student);

//【import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。】
// age = 19;

//【如果import的是一个对象，改写对象的属性是允许的。】
// person = {name: 'yuyy'};
person.name = 'yyy'


sayName();

// let s = new Student('yyy', 'Yanshan');
// s.sayName();
// s.saySchool();


//1、as :为变量重新赋值
import { name as myName } from './1-export';
console.log(myName);

//2、import具有提升效果
sayMyName();
import { sayName as sayMyName } from './1-export'






