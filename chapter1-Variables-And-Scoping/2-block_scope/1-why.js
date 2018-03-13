//1.内层变量可能覆盖外层变量
var tmp = new Date();
function f() {
    console.log(tmp);
    if(false){
        var tmp = 'hello world'
    }
}

f();

//2.用于计数的循环变量泄露为全局变量
var s = 'hello';
for (var i = 0; i < s.length; i++){
    console.log(s[i])
}

console.log(i); //5