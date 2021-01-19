/**
 * 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
*/
Promise.any([]).then(res => {
    console.log(res);
})