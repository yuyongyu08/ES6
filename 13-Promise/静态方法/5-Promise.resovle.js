// Promise.resolve("fulfiled").then((value) => {
//   console.log("onResolve: ", value);
// });

Promise.resolve(Promise.reject("reject")).then(
  (value) => {
    console.log("onResolve: ", value);
  },
  (reason) => {
    console.log("onRejected: ", reason);
  }
);
