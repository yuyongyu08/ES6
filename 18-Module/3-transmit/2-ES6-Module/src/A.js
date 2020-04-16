let person = {
    name: ''
}

function getPerson(){
    return person
}

function setPerson(data){
    person = data
}

export {
    person,
    getPerson,
    setPerson
}
