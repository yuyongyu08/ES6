import { person, setPerson } from './A'
import { print1, print2 }  from './B'

// person = { name: 'yuyongyu' } //ES6 Module 暴露的变量是只读，不允许直接修改；如果变量是对象，可以修改对象的属性

// setPerson({ name: 'yuyongyu' })
// person.name = 'yuyongyu' 

print1()
print2()
 