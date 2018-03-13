/* ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。但实际都能运行，不会报错 */

if(true){
    function f() {
        console.log('hello function')
    }
}


function f() {
    console.log('I am outside')
}

(function () {
   if(false){
       function f() {
           console.log('I am inside')
       }
   }

   f();
}());

//ES5 "I am inside"

//ES6 TypeError: f is not a function




/* 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。 */

// 函数声明语句
{
    let a = 'secret';
    function f() {
        return a
    }
}

// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a
    }
}


