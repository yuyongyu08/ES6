let MyPromise = require('./1-basic');
console.log(MyPromise);
let p = new MyPromise(function (resolve, reject) {
    console.log('cb call');

    if(Math.random() > 0.5){
        resolve('resolve')
    }else{
        reject('reject')
    }
});

p.then((msg)=>{
    console.log('resolve:', msg);
}, (msg) => {
    console.log('reject:', msg);
});


let MyFinalPromise = require('./2-final');
console.log(MyPromise);
let myFinalPromise = new MyFinalPromise(function (resolve, reject) {
    setTimeout(function () {
        console.log('call');
        resolve('fine')
    }, 1000)
});

myFinalPromise.then((msg)=>{
    console.log('resolve:', msg);
}, (msg) => {
    console.log('reject:', msg);
});