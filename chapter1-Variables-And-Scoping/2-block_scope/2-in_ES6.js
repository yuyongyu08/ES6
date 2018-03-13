/* 1. 外层代码块不受内层代码块的影响 */

function f1() {
    var n = 5;
    if(true){
        var n = 10
    }

    console.log(n)
}

f1(); //10

function f2() {
    let n = 5;
    if(true){
        let n = 10
    }

    console.log(n)
}

f2(); //5


/* 2. 外层作用域无法读取内层作用域的变量；内层作用域可以定义外层作用域的同名变量 */

function f3() {
    {
        let s = 'hello'
    }

    console.log(s) //ReferenceError: s is not defined
}

// f3();

function f4() {
    let s = 'hello';
    {
        console.log(s) //hello
    }
}

f4();


/* 3. 不在需要立即执行函数表达式（IIFE）*/

// IIFE
(function () {
    var tmp = 'hello';
}());

// 块级作用域
{
    let tmp = 'hello';
}









