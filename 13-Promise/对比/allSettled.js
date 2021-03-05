//allSettled是对all的补充，对于个别不成功的子promise一样返回

/**
 * 场景：所有的子promise对象都成功
 * 返回：触发成功，返回所有子promise的成功结果（数组对象形式, 形如[{status: 'fulfilled', value: '5s 成功'}]）
 * 
 * */

Promise.allSettled([
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

//



/** 
 * 场景：如果有失败的子promise，也正常触发父promise的成功
 * 返回：所有子promise的结果（不论失败或成功）
*/

Promise.allSettled([
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('1s 成功'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => reject('5s 失败'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => reject('3s 失败'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('7s 成功'), 7000)
    }),
]).then(value => console.log(value), err => console.log(err))