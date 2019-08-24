"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayAge = sayAge;
exports.sayName = sayName;
exports.Person = exports.Student = exports.job = exports.name = exports.age = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
* export命令可以出现在模块的任何位置，但必须是模块顶层
*/

/*
* 变量
**/
//方式1：
var age = 18; //方式2：（推荐）

exports.age = age;
var name = 'yuyy'; // export name; //SyntaxError，原因：export命令规定的是对外的接口

exports.name = name;
//方式3：
var j = 'developer';
exports.job = j;

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
var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(name, school) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name));
    _this.school = school;
    return _this;
  }

  _createClass(Student, [{
    key: "saySchool",
    value: function saySchool() {
      console.log("my school is ".concat(this.school));
    }
  }]);

  return Student;
}(Person); //方式2：（推荐）


exports.Student = Student;

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
* 一个模块多个export语句，会将导出内容合并到一个对象上
*/


exports.Person = Person;