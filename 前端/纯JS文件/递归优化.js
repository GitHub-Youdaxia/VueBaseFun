// 递归实现1到n的和, n过大时会发生栈溢出
// 优化 每到i%1000===0时,利用setTimeout任务放到宏任务队，等栈清空了就再继续递归
let n = 100000
function sum(total,i,callback) {
  if (i === 0) {
    callback(total)
  } else {
    total += i
    if (i % 1000 === 0) {
      setTimeout(sum,0,total,--i,callback)
    } else {
      sum(total,--i,callback)
    }
  }
  
}

sum(0,n,(res) => {
  console.log(res)
})

// function say () {

// }
// for (let index = 0; index < 100000; index++) {
//   say()
  
// }