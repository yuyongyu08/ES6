
/*
* 1、new.target：在【构造函数】中，返回new命令作用于的那个构造函数
**/

function Point(name) {
    if(new.target === Point){
        this.name = name;
    }else{
        throw Error('必须用 new 生成实例');
    }
}

// let p = Point('yuyy'); //Error: 必须用 new 生成实例


/*
* 2、new.target：在【类】中，返回当前类
**/

class Rectangle {
    constructor(w, h){
        console.log(new.target === Rectangle);
        this.width = w;
        this.height = h;
    }
}

let r = new Rectangle(10, 15); //true



//子类继承父类时，new.target会返回子类

class Square  extends Rectangle{
    constructor(w, h){
        super(w, h)
    }
}

let s = new Square(2, 2); //false



//应用：可以写出不能独立使用、必须继承后才能使用的类
class Shape {
    constructor(){
        if(new.target === Shape){
            throw new Error('Shape不能实例化')
        }
    }
}

class Triangle  extends Shape{
    constructor(w, h){
        super();
         this.width = w;
        this.height = h;
    }
}

let s1 = new Shape(); //Error: Shape不能实例化

let s2 = new Triangle(4, 4);











