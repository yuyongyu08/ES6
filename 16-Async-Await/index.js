// await 会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。

async function hello() {
    console.log('hello start');

    const greeting = await new Promise((resovle, reject) => {
        try {
            setTimeout(() => {
                resovle('hi')
            }, 3000)
        } catch (error) {
            reject('err')
        }
    })

    console.log('hello end');

    return greeting
}

async function test(){
    console.log('start');
    hello().then(console.log)
    // const result = await hello();
    // console.log(result);
    console.log('end');
}

test()
