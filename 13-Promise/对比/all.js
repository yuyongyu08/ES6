/**
 * 场景：所有的子promise对象都成功
 * 返回：触发成功，返回所有子promise的成功结果（数组形式，位置对应）
 * 
 * */

Promise.all([
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
 * 场景：如果有一个失败了，则触发父promise的失败
 * 返回：为第一个的失败结果
*/

Promise.all([
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