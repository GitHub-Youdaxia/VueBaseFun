
var arr = [1, 2, 5, 2, 1]

function findeIndex (arr) {
  let sum = arr.reduce((total, cur, index) => {
    return total + cur
  })
  let leftSum = 0
  let result
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (sum - element === 2 * leftSum) {
      result = index
      break
    }
    leftSum += arr[index]c
  }
  console.log(result);
  return result
}
findeIndex(arr)