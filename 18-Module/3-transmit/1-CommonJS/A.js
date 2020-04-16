let person = {
    name: ''
}

function getPerson(){
    return person
}

function setPerson(data){
    person = data
}

module.exports = {
    person,
    getPerson,
    setPerson
}