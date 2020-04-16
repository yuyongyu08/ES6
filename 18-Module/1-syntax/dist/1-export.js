"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayAge = sayAge;
exports.sayName = sayName;
exports.Person = exports.student = exports.person = exports.job = exports.name = exports.age = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* export命令可以出现在模块的任何位置，但必须是模块顶层
*/

/*
* 变量：基本类型、引用类型
**/
//基本类型-方式1：
var age = 18; //基本类型-方式2：（推荐）

exports.age = age;
var name = 'yuyy'; // export name; //SyntaxError，原因：export命令规定的是对外的接口

exports.name = name;
//基本类型-方式3：
var j = 'developer';
exports.job = j;
//引用类型-方式1：
var person = {
  name: '' //引用类型-方式2：

};
exports.person = person;
var student = {
  score: ''
};
exports.student = student;

/*
* 函数
**/
//方式1：
function sayAge() {
  console.log('I am 18 age old!');
} //方式2：（推荐）


function sayName() {
  console.log('I am yuyy!');
}

/*
* 类
**/
//方式1：
// export class Student extends Person {
//     constructor(name, school) {
//         super(name);
//         this.school = school
//     }
//     saySchool() {
//         console.log(`my school is ${this.school}`);
//     }
// }
//方式2：（推荐）
var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      console.log("I am ".concat(this.name));
    }
  }]);

  return Person;
}();
/*
* 一个模块多个export语句，会将导出内容【合并】到一个对象上
*/


exports.Person = Person;