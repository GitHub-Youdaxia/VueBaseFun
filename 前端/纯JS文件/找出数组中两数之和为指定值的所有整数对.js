var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 指定和为10

function getArr(arr, sum) {
  let startIndex = 0
  let endIndex = arr.length - 1
  while (startIndex < endIndex) {
    if (arr[startIndex] + arr[endIndex] > sum) {
      --endIndex
    }
    if (arr[startIndex] + arr[endIndex] < sum) {
      ++startIndex
    }
    if (arr[startIndex] + arr[endIndex] === sum) {
      console.log([arr[startIndex], arr[endIndex]]);
      ++startIndex
      --endIndex
    }
  }
}

getArr(arr, 10)
getArr(arr, 9)


// 给定一个数组[1,2,3,4,5,6,7,8,9,10],求出数组中任意组合为之和等于10的数组。
// 注意，每一种组合中一个数只能出现一次
function CalSum(array, result) {
  for (var i = 1; i < 1 << array.length; i++)//从1循环到2^N
  {
    var sum = 0;
    var temp = "";
    for (var j = 0; j < array.length; j++) {
      if ((i & 1 << j) != 0)//用i与2^j进行位与运算，若结果不为0,则表示第j位不为0,从数组中取出第j个数
      {
        sum += array[j];
        temp += array[j] + "+";
      }
    }
    if (sum == result) {
      var t = temp.split('+')
      var p = [];
      for (var j = 0; j < t.length; j++) {
        if (t[j] != '') {
          p.push(t[j])
        }
      }
      console.log(p)
    }


  }
}

var aa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var bb = 10;
CalSum(aa, bb)