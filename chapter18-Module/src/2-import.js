
/*
* 方式1：*方式，整体导入，用*指定一个对象，所有的输出都挂载到此对象上
*/

import * as all from './1-export';
all.sayName();
all.sayAge();

/*
* 方式2：{}方式，选择性导入，【{}中的变量名要与导出的名称相同】；export default导出，import则不能用{}
**/
import {name, sayName, Student} from './1-export'

console.log(name);

sayName();

let student = new Student('yyy', 'Yanshan');
student.sayName();
student.saySchool();


//as :为变量重新赋值
import {name as myName} from './1-export';
console.log(myName);

//import具有提升效果
sayMyName();
import {sayName as sayMyName} from './1-export'






