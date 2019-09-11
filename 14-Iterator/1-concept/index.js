
/*
* 【why?】
*
* ES6中的数据集合包括：Object、Array、Set、Map，这四种结构可以组合使用，互为成员，为了便于遍历访问，需要一种统一的接口机制处理不同的数据结构
*/

/*
* 【what？】
*
* Iterator是一种【接口】，为各种不同数据结构提供了统一的访问机制。任何数据结构，只要部署了Iterator接口，就可以依次处理数据结构中的所有成员。
*/


/*
* 【how？】
*
*（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
*（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
*（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
*（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
*/


function myIterator(arr) {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {value: undefined, done: true}
        }
    }
}

let iterator = myIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//对于遍历器对象来说，done: false和value: undefined属性都是可以省略的

function myIterator1(arr) {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < arr.length ? {value: arr[nextIndex++]} : {done: true}
        }
    }
}

let iterator1 = myIterator1([1, 2, 3]);

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
