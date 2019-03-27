let openDoor = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('open the door');
            resolve('door opened')
        }, 1000)
    })
};

let putElephant = function (msg) {
    console.log(msg);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('put in elephant');
            resolve('elephant putted in');
        }, 1000)
    })
};

let closeDoor = function (msg) {
    console.log(msg);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('close the door');
            console.log('finished');
        }, 1000)
    })
};



//把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

// openDoor().then(putElephant).then(closeDoor);

// openDoor().then(function (msg) {
//     return putElephant(msg);
// }).then(function (msg) {
//     return closeDoor(msg)
// });


//在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以接收到数据了
openDoor().then(function (msg) {
    console.log(msg);
    return 'put elephant in'
}).then(function (msg) {
    console.log(msg);
});