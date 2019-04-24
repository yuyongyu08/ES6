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

// 赛跑:"谁跑的快，以谁为准执行回调"，result是第一个的返回结果
Promise.race([openDoor(3000), putElephant(2000), closeDoor(10000)]).then(function (result) {
    console.log('result: ', result);
});



//应用：超时判断

// function loadImage() {
//     return new Promise(function (resolve, reject) {
//         let img = new Image();
//
//         img.onload = function () {
//             resolve('load success!');
//         };
//
//         img.src = 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2600006788,3275158172&fm=58&bpow=580&bpoh=785';
//     })
// }
//
// function timeout() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('load image timeout!');
//         }, 5000)
//     })
// }
//
// Promise.race([loadImage(), timeout()]).then(function (msg) {
//     console.log(msg);
// }).catch(function (err) {
//     console.log(err);
// });














