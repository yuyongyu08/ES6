//https://www.cnblogs.com/lvdabao/p/es6-promise-1.html

function openDoor(cb) {
    setTimeout(function () {
        console.log('open the door');

        cb('door opened')
    }, 1000)
}


function putElephant(cb) {
    setTimeout(function () {
        console.log('put ths elephant');

        cb('elephant putted in')
    }, 1000)
}

function closeDoor(cb) {
    setTimeout(function () {
        console.log('close the door');

        cb('finished')
    }, 1000)
}


openDoor(function (msg) {
    console.log(msg);
    putElephant(function (msg) {
        console.log(msg);
        closeDoor(function (msg) {
            console.log(msg);
        })
    })
});