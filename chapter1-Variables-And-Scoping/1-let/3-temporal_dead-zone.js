var temp = 123;

if(true){
    temp = 'hello var'; //ReferenceError: temp is not defined
    console.log(temp);


    let temp; //暂时性死区结束
    console.log(temp); // undefined

    temp = 'hello let';
    console.log(temp)
}

/* 暂时性死区: 在代码块内，使用let命令声明变量之前，该变量都是不可用的*/

/* 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。 */