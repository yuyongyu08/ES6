
/* const声明的是一个只读的常量，一旦声明不允许更改 */
const PI = 3.14159;
console.log(PI);

PI = 3.14; //TypeError: Assignment to constant variable.

/* const声明后，必须立即初始化（赋值）*/
const a; //SyntaxError: Missing initializer in const declaration


/* const在重复声明、块级作用域、暂时性死区、变量提升等方面和let一样*/