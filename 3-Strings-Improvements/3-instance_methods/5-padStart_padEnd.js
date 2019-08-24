
/*
* padStart(maxLength, fillString)，从开头用【指定字符串】对原字符串进行补全到【指定长度】，padEnd()从结尾开始
**/

//正常情况
console.log(`x`.padStart(3, 'y')); //yyx


//1、原字符串长度 >= 【指定长度】，补全不生效
console.log(`x`.padStart()); //x
console.log(`x`.padStart(0)); //x
console.log(`x`.padStart(1)); //x
console.log(`x`.padStart(1, 'yy')); // x


//2、【指定字符串】如果不传，默认用空字符串
console.log(`x`.padStart(2)); // x
console.log(`x`.padStart(2).length); // 2


//3、原字符串长度 < 【指定长度】，则【指定字符串】repeat()后进行补全
console.log(`x`.padStart(5, 'ab')); //ababx

//4、【指定字符串】repeat() + 原字符串长度 > 【指定长度】，对【指定字符串】repeat()进行截取后补全
console.log(`x`.padStart(4, 'ab')); //abcx




console.log(`x`.padEnd(4, 'ab')); //xaba
