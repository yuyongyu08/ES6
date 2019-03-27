//Promise的基本用法
// let p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('done');
//
//         resolve('well! I am here!');
//     })
// });
//
// p1.then((msg)=>{
//     console.log(msg);
// });


//常见用法-将Promise的实例化用函数包裹起来
// function asyncFn() {
//     let p = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('done');
//
//             resolve('well! I am here!');
//         })
//     });
//
//     return p
// }
//
// asyncFn().then(function (msg) {
//     console.log(msg);
// });


//如果是回调很简单（只有一层），通过callback也可以模拟

function asyncFn_1(cb) {
    setTimeout(function () {
        console.log('done');

        cb('well! I am here!');
    })
}

// function callback(msg) {
//     console.log('callback');
//     console.log(msg);
// }
//
// asyncFn_1(callback);


//但如果callback也需要回调函数呢？再定一个callback传递进去吗?
function callback_1(cb) {
    console.log('callback_1');
    cb();
}

function callback_2(msg) {
    console.log('callback_2');
    console.log(msg);
}


//如何把callback_2传给callback_1？
asyncFn_1(callback_1(callback_2)); //TypeError

asyncFn_1(function () {
    console.log('callback_1');
    cb();
});
