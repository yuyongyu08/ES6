
/*
* 子类必须在constructor方法中调用super方法，用来新建父类的this对象，否则新建实例时会报错
**/

/*
* 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
* 原因：
* ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
* ES6 的继承，实质是先将父类实例对象的属性和方法加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
*/

/*
* 父类的静态方法，也会被子类继承
**/

class Persen {
    static hello(){
        console.log('hello ES6');
    }
}

class Student extends Persen{

}

Student.hello(); //hello ES6