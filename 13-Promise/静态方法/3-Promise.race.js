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
Promise.race([p1, p3])
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

// fulfilled + rejected：返回最快的
Promise.race([p3, p2, p4])
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

// 全rejected：onRejected，返回最快的rejected
Promise.race([p2, p4])
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
Promise.myRace = function (taskList) {
  if (!Array.isArray(taskList)) throw new Error("参数必须为数组");
  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      Promise.resolve(task).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

Promise.myRace([p1, p3])
  .then(
    (data) => {
      console.log("myRace demo1 onResovle: ", data);
    },
    (reason) => {
      console.log("myRace demo1 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myRace demo1 catch: ", err);
  });

Promise.myRace([p3, p2, p4])
  .then(
    (data) => {
      console.log("myRace demo2 onResovle: ", data);
    },
    (reason) => {
      console.log("myRace demo2 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myRace demo2 catch: ", err);
  });

Promise.myRace([p2, p4])
  .then(
    (data) => {
      console.log("myRace demo3 onResovle: ", data);
    },
    (reason) => {
      console.log("myRace demo3 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myRace demo3 catch: ", err);
  });
