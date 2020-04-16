let { person, setPerson } = require('./A')
let { print1, print2 } = require('./B')

// person = { name: 'yuyongyu' }
// setPerson({ name: 'yuyongyu' })
person.name = 'yuyongyu'

print1()
print2()