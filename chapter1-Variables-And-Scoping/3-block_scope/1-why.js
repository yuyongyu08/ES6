/*
* ES5中只有【全局作用域】和【函数作用域】，没有【块状作用域】，弊端如下：
* */


//弊端1.内层变量可能覆盖外层变量
var tmp = '外层变量';

function f1() {
    console.log(tmp);
}

function f2() {
    console.log(tmp);
    if(false){
        var tmp = 'hello world'
    }
}

f1(); //外层变量
f2(); //undefined，内层变量提升覆盖了外层变量

//弊端2.用于计数的循环变量泄露为全局变量
let s = 'hello', arr = [];
for (var i = 0; i < s.length; i++){
    arr[i] = function(){
        console.log(i);
    }
}

console.log(i);; //5