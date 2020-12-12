


// （[1,2,3,5,6,9,10]=>[[1,2,3],[5,6],[9,10]）
var arr = [1,2,3,5,6,9,10]

function getResult (arr) {
  var result = []
  var recusion = function (item, index, innerArr) {                                                                   
    innerArr.push(item)
    ++index
    if (item + 1 === arr[index]) {
      recusion(arr[index], index, innerArr)
    } else{
      result.push(innerArr)
      if (arr[index]) {
        recusion(arr[index], index, [])
      }
    }
  }
  recusion(arr[0], 0, [])
  return result
}
console.log(getResult(arr));