
// 把一个函数作为参数callback传递给另一个函数，另一个函数执行代码到一个时机调用callback
function query(param,callback) {
  let yibujieguo = '你好'
 setTimeout(() => {
   callback(param+yibujieguo)
 }, 3000);

}

query('小明',(res) => {
  console.log(res)
})
function promiseAAA (fn) {
  function resolve(res) {
    // console.log(res)
    promiseAAA.callback(res)
  }
  fn(resolve)
}


promiseAAA((reslove) => {
  console.log('开始请求')
  setTimeout(() => {
    let result = '请求结果是：100'
    reslove(result)
  }, 3000);    
})
promiseAAA.callback = function (res) {
  console.log(res)
}