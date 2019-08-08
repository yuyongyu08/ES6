### 根据阮一峰[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)博客内容学习过程中，结合自己的理解，整理的学习示例。
#### PS:已购买实体书支持

#### 1. let和const

#### 2. 解构赋值
    1. 数组
    2. 对象
    3. 字符串
    4. 数字
    5. 布尔值
    6. 函数参数（有疑问）
    7. 应用
#### 3. String扩展
    1. 字符串模版
    2. 静态方法：
        1. String.fromCodePoint()
        2. String.raw()
    3. 实例方法
        1. codePointAt()
        2. normalize()
        3. includes()
        4. startsWith()、endsWith()
        5. repeat()
        6. padStart()、padEnd()
        7. trimStart()、trimEnd()
        8. matchAll()

#### 4. RegExp扩展

#### 5. Number扩展
    1. 静态方法
        1. Number.isFinite()
        2. Number.isNaN()
        3. Number.isInteger()
        4. Number.isSafeInteger()
        5. Number.parseInt()
        6. Number.parseFloat()

#### 6. Fucntion扩展
    1. 参数默认值
    2. rest参数
    3. name属性
    4. 箭头函数
    5. 尾调用
    6. 函数参数的尾逗号

#### 7. Array扩展
    1. 扩展运算符：rest参数的逆运算
    2. 静态方法
        1. Array.from()
        2. Array.of：弥补构造函数Array()的不足，避免产生空元素占位情况
    3. 实例方法
        1. copyWithin()
        2. find()
        3. findIndex()
        4. fill()
        5. entries()、keys()、values()
        6. includes()
        7. flat()：抹平（降为一维数组），通过参数控制递归层次
        8. flatMap()：map()+flat()

#### 8. Object扩展
    1. 属性、方法的简洁表达
    2. 属性名表达式
    3. 方法的name属性
    4. 属性的可枚举和遍历
        1. 可枚举性
        2. 遍历
    5. super
    6. 扩展元算符
        1. 解构赋值
        2. 扩展运算符

#### 9. Symbol

#### 10. Set和Map

#### 11. Proxy
    1. 实例方法
    2. Proxy.revocable()
    3. this问题
    4. 应用：Web服务的客户端

#### 12. Reflect
    1. 概述
    2. 静态方法
    3. 应用：使用Proxy实现观察者模式

#### 13. Promise
    1. 含义
    2. 用法
    3. 实例方法
        1. then()
        2. catch()
        3. finally()
    4. 静态方法
        1. all()
        2. race()
        3. resovle()
        4. reject()
    5. 应用
    6. Promise.try()

#### 14. Iterator和for…of

#### 15. Generator
    1. 语法
    2. 应用

#### 16. Class
    1. constructor
    2. 实例属性和方法
    3. 静态属性（提案）和方法
    4. get、set
    5. 私有属性和方法（提案）
    6. new.target
    7. 继承

#### 17. Module
    1. 语法：import、export
    2. 加载

#### 18. async/await
    1. 用法
    2. 实现原理


