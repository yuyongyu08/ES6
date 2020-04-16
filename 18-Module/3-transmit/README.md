**场景：**

1. A对外暴露一个对象

2. B引用了A的对象，并做了封装

3. 在test中对A的对象进行修改，观察B的输出情况

借此学习CommonJS和ES6 Module的区别:
1. CommonJS是静态引用，值拷贝；ES6 Module是动态加载，动态引用

2. CommonJS暴露的变量可以直接修改；ES6 Module暴露的变量不可以直接修改，如果是引用类型，可以修改其属性
