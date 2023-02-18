/**
 * 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
*/
let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "two");
});

Promise.any([p1, p2]).then(
  function (value) {
    console.log("onResolve: ", value);
  },
  function (reason) {
    console.log("onRejected: ", reason);
  }
);
