
/*
* 一个模块只能有一个默认输出，后面不能跟变量声明语句
*/

let name = 'default export';
export default name;


// let myName = 'yyy';
// export default myName; //Error: Only one default export allowed per module

//具名导出会和默认导出独立存在，使用时用各自的方式导入即可
export function say(n) {
    console.log(`this is ${n}`);
}