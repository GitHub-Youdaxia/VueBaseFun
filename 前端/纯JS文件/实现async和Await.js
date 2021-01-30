// async await 使用
var p1 = new Promise((resolve, reject) => {
setTimeout(() => {
  resolve(1)
 }, 2000)
})
var p2 = new Promise((resolve, reject) => {
setTimeout(() => {
  resolve(2)
 }, 2000)
})
async function asyncTest () {
  var val1 = await p1
  var val2 = await p2
  console.log(val1,val2);
}
asyncTest()

// Generator 缺陷：

// 1.函数外部无法捕获异常
// 2.多个 yield 会导致调试困难
// async 函数对 Generator 函数改进如下：
// 1.内置执行器
// 2.更好的语义
// 3.更广的适用性
// 4.返回值是 Promise
// async/await 做的事情就是将 Generator 函数转换成 Promise，
// 说白了，async 函数就是 Generator 函数的语法糖，await 命令就是内部 then 命令的语法糖。
/* 实现 */
function asyncToGenerator(generatorFn) {
  // 将 Generator 函数包装成了一个新的匿名函数，调用这个匿名函数时返回一个 Promise
  return function() {
      // 生成迭代器，相当于执行 Generator 函数
      // 如上面三碗不过岗例子中的 var canteen = webCanteenGenerator()
      var gen = generatorFn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
          // 利用 Generator 分割代码片段，每一个 yield 用 Promise 包裹起来
          // 递归调用 Generator 函数对应的迭代器，当迭代器执行完成时执行当前的 Promise，失败时则拒绝 Promise
          function step(key, arg) {
              try {
                  var info = gen[key](arg);
                  var value = info.value;
              } catch (error) {
                  reject(error);
                  return;
              }

              if (info.done) {
                  // 递归终止条件，完成了就 resolve
                  resolve(value);
              } else {
                  return Promise.resolve(value).then(function(value) {
                      step('next', value);
                  }, function(err) {
                      step('throw', err);
                  });
              }
          }
          return step('next');
      });
  }
}
/* 使用 */
function* generatorFn(){
  var val1 = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
     }, 2000)
    })
  console.log(val1);
  var val2 = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
     }, 2000)
    })
  console.log(val2);
}
var asyncFn = asyncToGenerator(generatorFn)
asyncFn()

function asyncToGenerator (generatorFn) {
  return function () {
    var gen = generatorFn()
    return new Promise((resolve, reject) => {
      // resolve()
      function step (key, arg) {
        try {
          var info = gen[key](arg)
          var {value,done} = info
        } catch (error) {
         return reject(error)
        }
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(res => {
            step('next', res)
          },reason => {
            step('throw', reason)
          })
        }
      }
      return step('next')
    })
  }
}