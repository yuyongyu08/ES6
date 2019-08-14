
/*
* export命令可以出现在模块的任何位置，但必须是模块顶层
*/



/*
* 变量
**/

//方式1：
let name = 'yuyy';
export {name};

//方式2：
export let age = 18;


/*
* 函数
**/

//方式1：
function sayName() {
    console.log('I am yuyy!');
}
export {sayName}

//方式2：
export function sayAge() {
    console.log('I am 18 age old!');
}

/*
* 类
**/

//方式1：
class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`I am ${this.name}`);
    }
}
export {Person}

//方式2：
export class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school
    }

    saySchool(){
        console.log(`my school is ${this.school}`);
    }
}

/*
* 一个模块多个export语句，会将导出内容合并到一个对象上
*/




