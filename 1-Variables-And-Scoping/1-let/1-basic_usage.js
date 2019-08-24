var a = [];
for(var i = 0; i < 5; i++){//变量i是var命令声明的，在全局范围内都有效
    a[i] = function () {
        console.log(i); //i指向的就是全局的i
    };
    console.log('var-for循环内：');
    a[i]();
}

a[3](); //5


console.log('****************************');

let b = [];
for(let i = 0; i < 5; i++){
    b[i] = function () { //当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
        console.log(i);
    };
    console.log('let-for循环内：');
    b[i]();
}

b[3](); //3

/* for循环还有一个特别之处，就是设置循环变量的那部分(小括号内)是一个父作用域，而循环体内部（大括号内）是一个单独的子作用域。*/

console.log('****************************');


for(let i = 0; i < 3; i++){
    let i = 'hello let!';
    console.log(i);
}
//hello let!
//hello let!
//hello let!

/* 函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。 */