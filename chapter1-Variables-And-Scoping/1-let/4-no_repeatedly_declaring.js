/*
* let不允许在相同作用域内，重复声明同一个变量。
* */

function a() {
    let foo = 'hello';
    let foo = 'let' //Identifier 'foo' has already been declared
}

a();

function b() {
    let foo = 'hello';
    var foo = 'let' //Identifier 'foo' has already been declared
}

b();


function c(arg) {
    let arg = 'hello' //Identifier 'arg' has already been declared 不能在函数内部重新声明参数。
}

c();

function d(arg) {
    {
        let arg = 'hello';
        console.log('内部：', arg);
    }
    console.log('外部：', arg);
}

d('let');