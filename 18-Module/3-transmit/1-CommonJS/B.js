let { person, getPerson } = require('./A')

function print1() {
    console.log('person.name: ', person.name);
}

function print2() {
    console.log('getPerson().name: ', getPerson().name);
}

module.exports = {
    print1,
    print2
}
