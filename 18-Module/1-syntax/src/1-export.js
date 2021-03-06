
/*
* export命令可以出现在模块的任何位置，但必须是模块顶层
*/



/*
* 变量：基本类型、引用类型
**/

//基本类型-方式1：
export let age = 18;

//基本类型-方式2：（推荐）
let name = 'yuyy';
// export name; //SyntaxError，原因：export命令规定的是对外的接口
export { name };


//基本类型-方式3：
let j = 'developer';
export { j as job }


//引用类型-方式1：
export let person = { name: '' }

//引用类型-方式2：
let student = {score: ''}
export {
    student
}



/*
* 函数
**/

//方式1：
export function sayAge() {
    console.log('I am 18 age old!');
}

//方式2：（推荐）
function sayName() {
    console.log('I am yuyy!');
}
export { sayName }

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
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`I am ${this.name}`);
    }
}
export { Person }

/*
* 一个模块多个export语句，会将导出内容【合并】到一个对象上
*/




