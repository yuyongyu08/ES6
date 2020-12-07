"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.say = say;
exports.default = void 0;

/*
* 一个模块只能有一个默认输出，后面不能跟变量声明语句
*/
var name = 'default export';
var _default = name; // export default {name}; //直接默认导出一个对象
//1、一个模块只能有一个默认输出
// let myName = 'yyy';
// export default myName; //Error: Only one default export allowed per module
//2、export default后面不能跟声明语句
// export default let sth = 'abc'; //SyntaxError: Only expressions, functions or classes are allowed as the `default` export
//3、具名导出会和默认导出独立存在，使用时用各自的方式导入即可

exports.default = _default;

function say(n) {
  console.log("this is ".concat(n));
}