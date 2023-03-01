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
  setTimeout(resolve, 300, "four");
});

// 全fulfilled：onResolve，返回所有
Promise.all([p1, p3])
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

// fulfilled + rejected：onRejected，返回最早rejected
Promise.all([p1, p2, p4])
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

// 全rejected：onRejected，返回最早rejected
Promise.all([p2, p4])
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
Promise.myAll = function (taskList) {
  if (!Array.isArray(taskList)) throw new Error("参数必须为数组");
  return new Promise((resolve, reject) => {
    let result = [];
    taskList.forEach((task, index) => {
      Promise.resolve(task).then(
        (data) => {
          result[index] = data;
          if (result.length === taskList.length) resolve(result);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
Promise.myAll([p1, p3])
  .then(
    (data) => {
      console.log("myAll demo1 onResovle: ", data);
    },
    (reason) => {
      console.log("myAll demo1 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAll demo1 catch: ", err);
  });

Promise.myAll([p1, p2, p4])
  .then(
    (data) => {
      console.log("myAll demo2 onResovle: ", data);
    },
    (reason) => {
      console.log("myAll demo2 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAll demo2 catch: ", err);
  });

Promise.myAll([p2, p4])
  .then(
    (data) => {
      console.log("myAll demo3 onResovle: ", data);
    },
    (reason) => {
      console.log("myAll demo3 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAll demo3 catch: ", err);
  });
