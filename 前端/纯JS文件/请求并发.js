// 请求并发
function startLimitPool(paramArr, request, max, callback) {
  const result = []
  Promise.all(Array.from({ length: max }).map(() => {
    return new Promise(resolve => {
      function runTask() {
        if (paramArr.length <= 0) {
          resolve()
          return
        }
        const paramItem = paramArr.shift()
        request(paramItem).then((res) => {
          result.push(res)
          Object.assign(paramItem, res)
          runTask()
        })
      }
      runTask()
    })
  })).then(() => callback(result))
}

function request (param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({index:param.index,res: param.index+'a'})
    }, Math.random()*500);
  })
}
var paramArr =  Array.from({length:50},(v,i) => ({index:i}))

startLimitPool([...paramArr],request, 5, res => {
  console.log(res);
  console.log(paramArr);
})


function startLimit (paramArr, request, max, callback) {
  var result
  Promise.all(  Array.from({length:max}).map(item => {
    return new Promise((resolve,reject) => {
      var recusion = function (paramArr) {
        if (paramArr.length > 0) {
          resolve()
          return
        }
        let paramItem = paramArr.shift()
        request(paramItem).then(res => {
          result.push(paramItem)
          Object.assign(paramItem, res)
        })
        
      }
      recusion(paramArr)
    })
  })).then(res => {
    callback(result)
    callback(paramArr)
  })
} 

startLimit([...paramArr],request, 5, res => {
  console.log(res);
  console.log(paramArr);
})