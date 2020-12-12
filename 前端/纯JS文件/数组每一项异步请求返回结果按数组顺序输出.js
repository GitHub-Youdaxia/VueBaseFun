function request (param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param + 'a')
    }, Math.random()*5);
  })
}
var arr = Array(10).fill('').map((item, index) => index)
Promise.all(arr.map((item) => request(item))).then(res => {
  console.log(res);
})
let arr = []
let sum = 0 // 执行结果个数
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    ++sum
    arr[index] = index + 'b'
    if (sum === 10) {
      console.log(arr);
    }
  }, Math.random()*5);
}