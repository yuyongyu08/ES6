import { person, getPerson } from './A'

function print1() {
    console.log('person.name: ', person.name);
}

function print2() {
    console.log('getPerson().name: ', getPerson().name);
}

export {
    print1,
    print2
}