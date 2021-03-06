/**
 * 场景：都成功的场景
 * 返回：最快的那个成功结果
 * 
 * */
Promise.race([
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('5s 成功'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('3s 成功'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('1s 成功'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))


/** 
 * 场景：有的成功有的失败
 * 返回：最快的那个（无论成功或失败）结果
 * 
*/

Promise.race([
    new Promise((resovle, reject) => {
        setTimeout(() => reject('5s 失败'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => reject('3s 失败'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() =>reject('1s 失败'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() =>resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))