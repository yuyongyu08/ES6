/**
 * 与all功能相同，区别：即便是有rejected的promise，依然正常执行
*/
Promise.allSettle([]).then(res => {
    console.log(res);
})