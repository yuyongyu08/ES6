let MyPromise = require('./1-basic');

//处理【同步】任务
let p = new MyPromise(function (resolve, reject) {
    try {
        if (Math.random() > 0.5) {
            resolve('success!')
        } else {
            reject('fail!')
        }
    } catch (error) {
        reject(error)
    }
});

// p.then((msg) => {
//     console.log(msg);
// }, (msg) => {
//     console.log(msg);
// }).then((msg) => {
//     console.log('第二个resolve', msg);
// }, (msg) => {
//     console.log('第二个reject', msg);
// });

//处理【异步】任务
let p1 = new MyPromise(function (resolve, reject) {
    try {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('success!')
            } else {
                reject('fail!')
            }
        }, 1000)
    } catch (error) {
        reject(error)
    }
});

p1.then((msg) => {
    console.log(msg);
}, (msg) => {
    console.log(msg);
}).then((msg) => {
    console.log('第2个resolve', msg);
}, (msg) => {
    console.log('第2个reject', msg);
}).then((msg) => {
    console.log('第3个resolve', msg);
}, (msg) => {
    console.log('第3个reject', msg);
});

