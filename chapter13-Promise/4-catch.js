function asyncFn(ok) {
    return new Promise(function (resolve, reject) {
        if(ok){
            console.log('good');
            resolve('everything is all right!');
        }else {
            console.log('bad');
            reject('oh, something is wrong');
        }
    })
}

//catch和then的第二个参数一样，用来指定reject的回调
// asyncFn(false).then(function (msg) {
//     console.log('resolve');
//     console.log(msg);
// }).catch(function (err) {
//     console.log('catch');
//     console.log(err);
// });


//then中已经有reject回调，即便是有catch，也不会走catch
// asyncFn(false).then(function (msg) {
//     console.log(msg);
// }, function (err) {
//     console.log('then');
//     console.log(err);
// }).catch(function (err) {
//     console.log('catch');
//     console.log(err);
// });

//在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中
asyncFn(true).then(function (msg) {
    console.log(msg);
    console.log(a); //a is not defined
}, function (err) {
    console.log('then');
    console.log(err);
}).catch(function (err) {
    console.log('catch');
    console.log(err);
});