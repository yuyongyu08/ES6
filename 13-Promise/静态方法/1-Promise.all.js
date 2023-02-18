let openDoor = function (timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('step 1:open the door');
            resolve('door opened')
        }, timeout)
    })
};

let putElephant = function (timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('step 2: put in elephant');
            resolve('elephant putted in');
        }, timeout)
    })
};

let closeDoor = function (timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('step 3 : close the door');
            resolve('finished');
        }, timeout)
    })
};

//"谁跑的慢，以谁为准执行回调"，results数组包含所有的返回结果
Promise.all([openDoor(3000), putElephant(2000), closeDoor(1000)]).then(function (results) {
    console.log('all results:', results);
});


Promise.all([
    openDoor(3000).then(function (msg) {
        console.log('openDoor then:', msg);
    }),
    putElephant(2000),
    closeDoor(1000)
]).then(function (results) {
    console.log('results:', results);
});

//有一个变为rejected，整个Promise都变为rejected（“一损俱损”）
Promise.all([
    Promise.resolve('hello!'),
    Promise.reject('error!'),
    Promise.resolve('hi!'),
]).then(results => {
    console.log(results);
}).catch(err => {
    console.log('catch:', err);
})