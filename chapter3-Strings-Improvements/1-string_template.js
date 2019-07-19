let msg = `hello world`;

/*
* 插入变量
* */

let msg1 = `say ${msg}`;

console.log(msg1);


/*
* ${}中可以放任何js表达式
* */

function say() {
    return `hello`
}

let msg2 = `he say ${say()}`;
console.log(msg2);


/*
* 标签字符串（tagged template）：模版字符串紧跟在函数名后，函数将被调用处理此模版字符串
* */

console.log`it is tagged template!`;