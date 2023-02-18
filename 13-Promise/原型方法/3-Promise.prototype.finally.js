function getNumber() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let num = Math.ceil(Math.random()*10);

            if(num >= 5){
                console.log(num);
                resolve('the number is all right!')
            }else{
                console.log(num);
                reject('the number is too small!')
            }
        }, 1000)
    })
}

getNumber().then(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err);
});