Promise.myAll = function (arr) {
  var length = arr.length
  var resList = []
  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      Promise.resolve(promise).then(res => {
        resList[index] = res
        if (resList.length === length) {
          resolve(resList)
        }
      })
    })
  })
}

var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11)
  }, 1000);
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22)
  }, 3000);
})

Promise.myAll([p1, p2]).then(res => {
  console.log(res)
})