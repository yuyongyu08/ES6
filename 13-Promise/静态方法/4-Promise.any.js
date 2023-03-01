let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "one");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "two");
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, "three");
});
let p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 300, "four");
});

// 全fulfilled：onResolve，返回最快的fulfilled
Promise.any([p1, p3])
  .then(
    (data) => {
      console.log("demo1 onResovle: ", data);
    },
    (reason) => {
      console.log("demo1 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("demo1 catch: ", err);
  });

// fulfilled + rejected：onResolve，返回最快的fulfilled
Promise.any([p1, p2, p3])
  .then(
    (data) => {
      console.log("demo2 onResovle: ", data);
    },
    (reason) => {
      console.log("demo2 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("demo2 catch: ", err);
  });

// 全rejected：onRejected，返回所有的rejected
Promise.any([p2, p4])
  .then(
    (data) => {
      console.log("demo3 onResovle: ", data);
    },
    (reason) => {
      console.log("demo3 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("demo3 catch: ", err);
  });

/*************************************** 手写 ***************************************/
Promise.myAny = function (taskList) {
  if (!Array.isArray(taskList)) throw new Error("参数必须为数组");
  return new Promise((resolve, reject) => {
    let reasons = [];
    taskList.forEach((task, index) => {
      Promise.resolve(task).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reasons[index] = reason;
          if (reasons.length === taskList.length) reject(reasons);
        }
      );
    });
  });
};

Promise.myAny([p1, p3])
  .then(
    (data) => {
      console.log("myAny demo1 onResovle: ", data);
    },
    (reason) => {
      console.log("myAny demo1 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAny demo1 catch: ", err);
  });

Promise.myAny([p1, p2, p3])
  .then(
    (data) => {
      console.log("myAny demo2 onResovle: ", data);
    },
    (reason) => {
      console.log("myAny demo2 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAny demo2 catch: ", err);
  });

Promise.myAny([p2, p4])
  .then(
    (data) => {
      console.log("myAny demo3 onResovle: ", data);
    },
    (reason) => {
      console.log("myAny demo3 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAny demo3 catch: ", err);
  });
