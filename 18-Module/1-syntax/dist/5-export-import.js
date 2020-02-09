"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  age: true,
  name: true,
  job: true,
  sayAge: true,
  sayName: true,
  Student: true,
  Person: true,
  say: true
};
Object.defineProperty(exports, "age", {
  enumerable: true,
  get: function get() {
    return _export.age;
  }
});
Object.defineProperty(exports, "name", {
  enumerable: true,
  get: function get() {
    return _export.name;
  }
});
Object.defineProperty(exports, "job", {
  enumerable: true,
  get: function get() {
    return _export.job;
  }
});
Object.defineProperty(exports, "sayAge", {
  enumerable: true,
  get: function get() {
    return _export.sayAge;
  }
});
Object.defineProperty(exports, "sayName", {
  enumerable: true,
  get: function get() {
    return _export.sayName;
  }
});
Object.defineProperty(exports, "Student", {
  enumerable: true,
  get: function get() {
    return _export.Student;
  }
});
Object.defineProperty(exports, "Person", {
  enumerable: true,
  get: function get() {
    return _export.Person;
  }
});
Object.defineProperty(exports, "say", {
  enumerable: true,
  get: function get() {
    return _export_default.say;
  }
});

var _export = require("./1-export");

Object.keys(_export).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _export[key];
    }
  });
});

var _export_default = require("./3-export_default");

Object.keys(_export_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _export_default[key];
    }
  });
});