function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("done");
        }, interval);
    });
};

async function slow() {
    console.time('slow');
    let a1 = await timeoutPromise(3000)
    let a2 = await timeoutPromise(3000)
    let a3 = await timeoutPromise(3000)
    console.log(a1, a2, a3);
    console.timeEnd('slow');
}

async function fast() {
    console.time('fast');
    const t1 = timeoutPromise(3000)
    const t2 = timeoutPromise(3000)
    const t3 = timeoutPromise(3000)

    const a1 = await t1;
    const a2 = await t2;
    const a3 = await t3;

    console.log(a1, a2, a3);
    console.timeEnd('fast');
}

async function all(){
    console.time('all');
    const tasks = [
        timeoutPromise(3000),
        timeoutPromise(3000),
        timeoutPromise(3000),
    ]
    const result =  await Promise.all(tasks);
    console.log(...result);
    console.timeEnd('all');
}

slow()
fast()
all()