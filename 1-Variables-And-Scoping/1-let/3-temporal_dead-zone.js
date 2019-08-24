var temp = 123;

if(true){
    temp = 'hello var';
    console.log(temp); //hello var
}

if(true){
    temp = 'hello var'; //ReferenceError: temp is not defined
    console.log(temp);


    let temp; //暂时性死区结束
    console.log(temp); // undefined

    temp = 'hello let';
    console.log(temp)
}

/*
* let会造成暂时性死区（TDZ，temporal dead zone）
*
* 暂时性死区: 块级作用域变量始终“存在(present)”于它们的作用域里，但在直到声明它的代码之前的区域都属于暂时性死区。
*
* 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
*
* 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到let声明变量的那一行代码出现，才可以获取和使用该变量。
*
* */