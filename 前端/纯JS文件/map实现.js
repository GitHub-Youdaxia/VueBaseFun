

Array.prototype.myMap = function (fn) {
  let arr = []
  for (let index = 0; index < this.length; index++) {
    arr.push(fn(this[index], index, this))
  }
  return arr
}

var arr = [1,2,3]
var arr2 = arr.myMap(item => item * 2)
console.log(arr2)











