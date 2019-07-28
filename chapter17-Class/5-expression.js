
/*
* 1、属性表达式：类的属性名可以使用表达式
**/

let methodName = 'getArea';

class Square {
    constructor(w, h){
        this.width = w;
        this.height = h;
    }

    [methodName](){
        return this.width * this.height;
    }
}

let s = new Square(2, 2);
console.log(s.getArea()); //4


/*
* 2、Class表达式
**/

let MyClass = class Me {
  getClassName(){
      return Me.name
  }
};


//Me只在Class 的内部可用，指代当前类；在 Class 外部，这个类只能用MyClass引用。
// let c1 = new Me(); //ReferenceError: Me is not defined

let c2 = new MyClass();

//类名还是Me
console.log(c2.getClassName()); //Me


//如果没有用到Me，可以简写为
MyClass =  class {};


/*
* 3、立即执行类
**/

let person = new class{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}('yuyy');

console.log(person.getName());//yuyy