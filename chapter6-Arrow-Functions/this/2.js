// this指向词法作用域，也就是外层调用者
let obj = {
    birth: 1990,
    getAge: function () {
        let fn = () => new Date().getFullYear() - this.birth;

        return fn();
    }
};

console.log(obj.getAge());