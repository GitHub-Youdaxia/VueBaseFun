
function A () {
  this.name = '小明'
  this.age = 55
}
// 拦截构造函数，每次执行构造函数只能 return single
const singletonify = (OriginalClass) => {
  let single = new OriginalClass();
  return new Proxy(OriginalClass, {
    construct(target, arguments, newTarget) {
      return single
    }
  });
};
let singA = singletonify(A)
let a1 = new singA()
let a2 = new singA()
console.log(a1)
console.log(a2)
console.log(a1 === a2)
