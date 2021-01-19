//rest参数是类数组

function add(x, y) {
  console.log(typeof arguments, arguments.length);
  return x + y
}

// function sum(...args) {
//     console.log(typeof args, args.length);
//     let total = 0;
//     total = Array.prototype.reduce.call(args, (pv, cv) => pv + cv, 0)
//     return total
// }

function sum(...args) {
  console.log(Array.isArray(args));

  return args.reduce((pre, cur) => pre + cur)
}

console.log(add(1, 3));
console.log(sum(1, 2, 3));

