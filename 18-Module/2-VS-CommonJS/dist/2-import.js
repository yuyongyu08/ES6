"use strict";

var _export = require("./1-export");

console.log(_export.counter); //0

(0, _export.increase)();
console.log(_export.counter); //1
//ES6 Module是动态加载，动态引用