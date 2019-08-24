"use strict";

var all = _interopRequireWildcard(require("./3-export_default"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/*
* export default的导入
*/
all.say(all["default"].name); //export default命令其实只是输出一个叫做default的变量

all.say(all["default"]);
/*
* export的导入
*/
//方式1：有选择的导入

(0, all.say)('yyy'); //方式2：全量导入

all.say('yuyongyu');
/*
* export default和export在一个模块中共存时，两者的导出并没有合并在一起
*/

console.log(all.name); //undefined

console.log(all["default"].name); //undefined