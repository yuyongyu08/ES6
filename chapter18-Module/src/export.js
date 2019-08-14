
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

//方法1：
function sayName() {
    console.log('I am yuyy!');
}
export {sayName}

//方法2：
export function sayAge() {
    console.log('I am 18 age old!');
}

/*
* 类
**/

//方法1：
class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`I am ${this.name}`);
    }
}

export {Person}

//方法2：
export class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school
    }

    saySchool(){
        console.log(`my school is ${this.school}`);
    }
}






