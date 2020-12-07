/*
* export default的导入
*/
import name from './3-export_default'
all.say(name);

//export default命令其实只是输出一个叫做default的变量
import {default as myName} from './3-export_default'
all.say(myName);



/*
* export的导入
*/
//方式1：有选择的导入
import {say} from './3-export_default'
say('yyy');

//方式2：全量导入
import * as all from './3-export_default'
all.say('yuyongyu');


/*
* export default和export在一个模块中共存时，两者的导出并【没有】合并在一起
*/
console.log(all.name); //undefined
console.log(all.default); //default指向name
console.log(all.default.name); //undefined


//对于一个既有default导出有具名导出，取值方式
import newName, {say as newSay} from './3-export_default';
say(newName);




