
/*
* 1、类和模块的内部，默认就是严格模式。ES6 实际上把整个语言升级到了严格模式
**/


/*
* 2、类不存在变量提升（hoist）
**/
// let p = new Person(); //ReferenceError: Person is not defined


/*
* 3、name属性：class关键字后面的类名。
*
* ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性
**/
class Person {

}

console.log(Person.name);


/*
* 4、TODO Generator 方法
**/

/*
* 5、类的方法内部如果含有this，它默认指向类的实例
**/