
/*
* export和import的符合写法
*/
//具体输出
export { age, name, job, sayAge, sayName, Student, Person} from './1-export'

export name from './3-export_default'
export { say } from './3-export_default'

//整体输出
export * from './1-export'
export * from './3-export_default'