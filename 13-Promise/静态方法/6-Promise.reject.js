Promise.reject("fulfiled")
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

Promise.reject("fulfiled")
  .then((value) => {
    console.log("onResolve: ", value);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
