"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPerson = getPerson;
exports.setPerson = setPerson;
exports.person = void 0;
var person = {
  name: ''
};
exports.person = person;

function getPerson() {
  return person;
}

function setPerson(data) {
  exports.person = person = data;
}