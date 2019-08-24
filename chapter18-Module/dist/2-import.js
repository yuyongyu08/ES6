"use strict";

var all = _interopRequireWildcard(require("./1-export"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/*
* 方式1：*方式，整体导入，用*指定一个对象，所有的输出都挂载到此对象上
*/
all.sayName();
all.sayAge();
/*
* 方式2：{}方式，选择性导入，【{}中的变量名要与导出的名称相同】；export default导出，import则不能用{}
**/

console.log(all.name);
console.log(all.job);
(0, all.sayName)();
var student = new all.Student('yyy', 'Yanshan');
student.sayName();
student.saySchool(); //1、as :为变量重新赋值

console.log(all.name); //2、import具有提升效果

(0, all.sayName)();