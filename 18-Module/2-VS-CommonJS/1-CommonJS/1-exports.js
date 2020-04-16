let counter = 0;
function increase() {
    counter++
}

function getCounter() {
    return counter
}

let person = {
    name: ''
}

module.exports = {
    counter,
    increase,
    getCounter,
    person
}

//知识点：module.exports和exports指向同一个对象，https://nodejs.org/docs/latest-v12.x/api/modules.html#modules_the_module_object
// console.log(module.exports === exports);

// exports.counter = counter;
// exports.increase = increase;
// exports.getCounter = getCounter;


