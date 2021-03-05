//any是为了弥补race的缺陷，只返回第一个成功的结果

/**
 * 场景：都成功的场景
 * 返回：最快的那个成功结果
 * 
 * */
Promise.any([
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('5s 成功'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('3s 成功'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('1s 成功'), 1000) //返回此结果
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))


/** 
 * 场景：有的成功有的失败
 * 返回：最快成功的那个结果
 * 
*/

Promise.any([
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
        setTimeout(() =>resovle('7s 成功'), 7000) //返回此结果
    }),
]).then(value => console.log(value), err => console.log(err))


/** 
 * 场景：都失败
 * 返回：报错发生异常
 * 
*/
Promise.any([
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
        setTimeout(() =>reject('7s 失败'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))
.catch(err => console.log(err))