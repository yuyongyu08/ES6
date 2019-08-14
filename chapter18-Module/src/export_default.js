
let name = 'yuyy';
let age = 18;




class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`I am ${this.name}`);
    }
}
export class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school
    }

    saySchool(){
        console.log(`my school is ${this.school}`);
    }
}


export default {
    name,
    age,
    sayName: function () {
        console.log('I am yuyy!');
    },
    sayAge: function () {
        console.log('I am 18 age old!');
    },
    Person,
    Student
}



