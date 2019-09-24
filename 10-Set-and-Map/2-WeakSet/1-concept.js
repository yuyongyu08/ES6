
/*
* WeakSet 结构与 Set 类似，但与Set有2个区别：
*/

//区别1：WeakSet 的【成员只能是对象】，而不能是其他类型的值



//区别2：WeakSet 中的对象都是弱引用（即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。）


//WeakSet的成员会随时消失，所以WeakSet的成员是不适合引用的
//WeakSet内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，所以WeakSet不可遍历


//WeakSet有什么用？
//WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。 TODO 不理解。。。

//场景1：储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

//场景2：在类中存储实例的引用
const ws = new WeakSet();
class Person {
    constructor(){
        ws.add(this)
    }

    speak(){
        console.log('person can speak');
    }

    eat(){
        if (!ws.has(this)){
            throw new TypeError('Person.prototype.eat只能在实例上调用')
        }
        console.log('person can eat');
    }
}

let p = new Person();
p.speak();
p.eat();
Person.prototype.speak();
Person.prototype.eat();

