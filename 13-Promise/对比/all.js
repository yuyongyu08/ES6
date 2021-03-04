//所有的promise对象都成功的时候才会触发成功
Promise.all([
    new Promise((resovle, reject) => {
        setTimeout(resovle('5s 成功'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('3s 成功'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('1s 成功'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))


//如果有一个失败了，则触发父promise的失败，返回的结果为第一个的（位置第一个，不是响应第一个）失败结果
Promise.all([
    new Promise((resovle, reject) => {
        setTimeout(reject('5s 失败'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(reject('3s 失败'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('1s 成功'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))