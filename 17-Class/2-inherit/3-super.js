
/*
* super有两种用途：
* 1.作为【函数】使用
* 2.作为【对象】使用
*/


/*
* 一、作为函数，代表父类的构造函数
*/

//1.super虽然代表了父类A的构造函数，但是【返回的是子类B的实例】，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。
class A {
    constructor(){
        console.log(new.target.name); //new.target代表正在执行的函数
    }
}

class B extends A{
    constructor(){
        super(); //A.prototype.constructor.call(this)
    }
}

new A(); //A
new B(); //B

//2.作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
class C extends A{
    m(){
        // super() //SyntaxError: 'super' keyword unexpected here
    }
}


/*
* 二、作为对象，在普通方法中，super指向父类的原型对象；在静态方法中，super指向父类。
*/

//super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的

//在子类【普通方法】中通过super调用父类的方法时，方法内部的【this】指向当前的【子类实例】；
//在子类【静态方法】中通过super调用父类的方法时，方法内部的【this】指向当前的【子类】，而不是子类的实例。


class Person {
    constructor(name){
        this.name = name
    }

    syaName(){
        console.log(this.name);
    }
    
    static syaName(){
        console.log('Person.name');
    }
}

class Student extends Person{
    constructor(name, school) {
        super(name);
        this.school = school;
    }

    sayHello(){
        super.syaName();
        console.log(`in ${this.school}`);
    }

    static sayHello(){
        super.syaName();
        console.log(`in ${this.school}`);
    }
}

Student.sayHello();

let s = new Student('yuyy', 'YanShan');
s.sayHello();










