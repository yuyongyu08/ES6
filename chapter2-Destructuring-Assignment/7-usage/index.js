
/*
* 场景1：交换变量值
* */

let x = 1; y =2;
[x, y] = [y, x];

console.log(x, y); //2 1

/*
* 场景2：从函数（接口）返回取值
* */

function fetchData() {
    return {
        code: 0,
        data: {
            title: '成功'
        }
    }
}

let {data} = fetchData();

console.log(data.title); //成功

/*
*  场景3：函数参数及默认值
* */

function showInfo({name, age, job}) {
    console.log(`${name} is a ${job}, ${age} years old.`);
}

showInfo({name: 'yuyy', age: 18, job: 'programmer'}); //yuyy is a programmer, 18 years old.

//等同于
let name = 'yuyy', age = 18, job = 'programmer';
let info = {name: name, age: age, job: job};
showInfo(info);


