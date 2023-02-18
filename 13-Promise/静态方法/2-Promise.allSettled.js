let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "one");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "two");
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, "three");
});

Promise.allSettled([p1, p2, p3]).then(function (value) {
  console.log("onResolve: ", value);
});
