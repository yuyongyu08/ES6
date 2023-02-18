let openDoor = function (timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("step 1:open the door");
      resolve("door opened");
    }, timeout);
  });
};

let putElephant = function (timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("step 2: put in elephant");
      resolve("elephant putted in");
    }, timeout);
  });
};

let closeDoor = function (timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("step 3 : close the door");
      resolve("finished");
    }, timeout);
  });
};

// 赛跑:"谁跑的快，以谁为准执行回调"，result是第一个的返回结果
Promise.race([openDoor(3000), putElephant(2000), closeDoor(10000)]).then(function (result) {
  console.log("result: ", result);
});

let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "two");
});

Promise.race([p1, p2]).then(
  function (value) {
    console.log("onResolve: ", value);
  },
  function (reason) {
    console.log("onRejected: ", reason);
  }
);
