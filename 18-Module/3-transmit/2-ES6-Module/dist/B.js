"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print1 = print1;
exports.print2 = print2;

var _A = require("./A");

function print1() {
  console.log('person.name: ', _A.person.name);
}

function print2() {
  console.log('getPerson().name: ', (0, _A.getPerson)().name);
}