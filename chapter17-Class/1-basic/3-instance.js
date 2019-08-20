
class Point{
    // distance = 0; //【实例属性】除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层，（TODO 报错！ES7？）

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `(${this.x},${this.y})`
    }

    static print(){
        console.log('print:', this.x, this.y);
    }
}

Point.z = 0;


/*
* 1、【实例属性】即定义在this对象上
**/
let p1 = new Point(10,20);

console.log(p1.distance);

console.log(p1.x === Point.prototype.x); //false
console.log(p1.toString === Object.getPrototypeOf(p1).toString); //true
console.log(p1.toString === Point.prototype.toString); //true

console.log('实例属性：');
console.log('x在实例上？', p1.hasOwnProperty('x')); //true
console.log('x在Point上？', Point.hasOwnProperty('x')); //false
console.log('x在Point.prototype？', Point.prototype.hasOwnProperty('x')); //false

console.log('类属性：');
console.log('z在实例上？', p1.hasOwnProperty('z')); //false
console.log('z在Point上？', Point.hasOwnProperty('z')); //true
console.log('z在Point.prototype？', Point.prototype.hasOwnProperty('z')); //false

console.log('原型属性');
console.log('toString在实例上？',p1.hasOwnProperty('toString')); //false
console.log('toString在Point上？', Point.hasOwnProperty('toString')); //false
console.log('toString在Point.prototype？', Point.prototype.hasOwnProperty('toString')); //true
console.log();
console.log('print在实例上？',p1.hasOwnProperty('print')); //false
console.log('print在Point上？', Point.hasOwnProperty('print')); //true
console.log('print在Point.prototype？', Point.prototype.hasOwnProperty('print')); //false


/*
* 总结：
* 一个类中可能有3种属性：
* 1.实例属性：定义在this上（例如x、y）
* 2.原型属性：定义在类的原型对象上（例如toString、print）
* 3.类属性：定义在类本身上（例如z），很少使用！
*
* 由此也可推出new一个对象时做的最重要的两件事：
* 1.把this指向实例
* 2.把类的原型对象指向实例的原型指针
*
*/



/*
* 2、类的所有实例共享一个原型对象
**/
let p2 = new Point(3, 4);

console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2)); //true


/*
* 3、实例可以为类添加方法，但会影响所有实例（包括新生成的实例），【不推荐使用】！！！
**/

p1.__proto__.print = function () {
  console.log(`position: (${this.x}, ${this.y})`);
};

p1.print(); //position: (10, 20)
p2.print(); //position: (3, 4)

let p3 = new Point(5,6);
p3.print(); //position: (5, 6)


/*
* TODO
* 【__proto__】 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，
* 虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，
* 但依旧不建议在生产中使用该属性，避免对环境产生依赖。
* 生产环境中，我们可以使用 【Object.getPrototypeOf】 方法来获取实例对象的原型
**/

