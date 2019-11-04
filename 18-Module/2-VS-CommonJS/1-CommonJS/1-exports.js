let counter = 0;
function increase(){
    counter++
}

function getCounter(){
    return counter
}

console.log(module.exports === exports);

module.exports = {
    counter,
    increase,
    getCounter
}


