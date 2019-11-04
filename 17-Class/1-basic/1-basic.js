/*
* ES5时代，【构造函数】
*/
function PointFunction(x, y) {
    this.x = x;
    this.y = y;
}

PointFunction.prototype.toString = function(){
    return `(${this.x},${this.y})`
};

let p1 = new PointFunction(10, 20);
console.log(p1.toString()); //(10,20)

/*
* ES6时代，【类】
*/
class PointClass{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `(${this.x},${this.y})`
    }
}

let p2 = new PointClass(10, 20);
console.log(p2.toString());//(10,20)


/*
*  1、【类】完全可以看作【构造函数】的另一种写法
**/

console.log(typeof PointFunction); //function
console.log(typeof PointClass); //function

console.log(PointFunction === PointFunction.prototype.constructor); //true
console.log(PointClass === PointClass.prototype.constructor); //true



/*
* 2、【类】也有prototype属性，【类】上的所有【方法】都定义在prototype属性；属性除非显式定义在this对象上，都定义在原型上
**/

class PointClass1{
    z = 0;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

PointClass1.prototype.toString = function () {
    return `(${this.x},${this.y})`
};

console.log(PointClass1.prototype);

let p3 = new PointClass1(10, 20);

console.log(p3.toString()); //(10,20)



/*
* 3、在类的实例上面调用方法，其实就是调用原型上的方法
**/
console.log(p3.toString === PointClass1.prototype.toString); //true


/*
* 4、【类】内部所有的方法（prototype上的）都不可枚举（non-enumerable），【构造函数】可以枚举
**/
console.log(Object.keys(PointClass.prototype)); //[]
console.log(Object.getOwnPropertyNames(PointClass.prototype)); //[ 'constructor', 'toString' ]

console.log(Object.keys(PointFunction.prototype)); //[ 'toString' ]
console.log(Object.getOwnPropertyNames(PointFunction.prototype)); //[ 'constructor', 'toString' ]

