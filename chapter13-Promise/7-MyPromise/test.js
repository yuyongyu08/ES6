let MyPromise = require('./3-then_final');
console.log(MyPromise);
let p = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        console.log('call');
        resolve('fine')
    }, 1000)
});

p.then((msg)=>{
    console.log(msg);
});