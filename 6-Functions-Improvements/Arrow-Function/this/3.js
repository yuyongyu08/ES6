//箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定。
//所谓的定义时候绑定，就是this是【继承自父执行上下文中的this】，
// 比如这里的箭头函数中的this.name，箭头函数本身与say平级以key:value的形式，也就是箭头函数本身所在的对象为obj，而obj的父执行上下文就是window，
// 因此这里的this.x实际上表示的是window.x，因此输出的是11。
// (this只有在函数被调用，或者通过构造函数new Object()的形式才会有this)

var name = 'global';

let obj = {
    name: 'obj',
    sayName: () => {
        console.log(this.name);
    }
};

obj.sayName()