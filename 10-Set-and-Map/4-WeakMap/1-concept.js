
/*
* WeakMap与Map的区别有两点
*/

//区别1：WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名


//区别2：WeakMap的键名所指向的对象，不计入垃圾回收机制

//WeakMap的专用场合就是，它的【键】所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏


//WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。


//WeakMap的应用
//应用1：的典型场合就是 DOM 节点作为键名
//应用2：部署私有属性