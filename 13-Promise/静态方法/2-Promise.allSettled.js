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

// 全fulfilled：onResolve，返回所有fulfilled
Promise.allSettled([p1, p3])
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

// fulfilled + rejected：onResolve，返回所有fulfilled + rejected
Promise.allSettled([p1, p2, p4])
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

// 全rejected：onResolve，返回所有rejected
Promise.allSettled([p2, p4])
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
Promise.myAllSettled = function (taskList) {
  if (!Array.isArray(taskList)) throw new Error("参数必须为数组");
  return new Promise((resolve, reject) => {
    let result = [];
    taskList.forEach((task, index) => {
      Promise.resolve(task).then(
        (value) => {
          result[index] = { state: "fulfilled", value };
          if (result.length === taskList.length) resolve(result);
        },
        (reason) => {
          result[index] = { state: "rejected", reason };
          if (result.length === taskList.length) resolve(result);
        }
      );
    });
  });
};

Promise.myAllSettled([p1, p3])
  .then(
    (data) => {
      console.log("myAllSettled demo1 onResovle: ", data);
    },
    (reason) => {
      console.log("myAllSettled demo1 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAllSettled demo1 catch: ", err);
  });

Promise.myAllSettled([p1, p2, p4])
  .then(
    (data) => {
      console.log("myAllSettled demo2 onResovle: ", data);
    },
    (reason) => {
      console.log("myAllSettled demo2 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAllSettled demo2 catch: ", err);
  });

Promise.myAllSettled([p2, p4])
  .then(
    (data) => {
      console.log("myAllSettled demo3 onResovle: ", data);
    },
    (reason) => {
      console.log("myAllSettled demo3 onRejectd: ", reason);
    }
  )
  .catch((err) => {
    console.log("myAllSettled demo3 catch: ", err);
  });
