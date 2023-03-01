/**
 * 有onReject，执行onReject
 */
Promise.reject("rejected")
  .then(
    (value) => {
      console.log("onResolve: ", value);
    },
    (reason) => {
      console.log("onRejected: ", reason);
    }
  )
  .catch((err) => {
    console.log("catch: ", err);
  });

/**
 * 没有onReject，则执行 onReject
 */
Promise.reject("rejected")
  .then((value) => {
    console.log("onResolve: ", value);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
