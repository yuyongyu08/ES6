Promise.resolve("fulfiled").then((value) => {
  console.log("onResolve: ", value);
});

/**
 * 任务如果是rejected，则执行onRejected
 */
Promise.resolve(Promise.reject("reject")).then(
  (value) => {
    console.log("onResolve: ", value);
  },
  (reason) => {
    console.log("onRejected: ", reason);
  }
);
