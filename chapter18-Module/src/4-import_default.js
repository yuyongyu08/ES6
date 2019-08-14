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
//方式1：
import {say} from './3-export_default'
say('yyy');

//方式2：
import * as all from './3-export_default'
all.say('yuyongyu');

