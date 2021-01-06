// 请求并发2
function request (param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({index:param.index,res: param.index+'a'})
    }, Math.random()*500);
  })
}
var paramArr =  Array.from({length:50},(v,i) => ({index:i}))
function startLimit (paramArr, request, max, callback) {
  var result = []
  var recusion = function (resolve) {
    if (paramArr.length <= 0) {
      resolve()
      return
    }
    let paramItem = paramArr.shift()
    request(paramItem).then(res => {
      result.push(res)
      Object.assign(paramItem, res)
      recusion(resolve)
    })
    
  }
  Promise.all(Array.from({length:max}).map(item => {
    return new Promise((resolve) => {
      recusion(resolve)
    })
  })).then(() => {
    callback(result)
  })
} 
startLimit([...paramArr],request, 5, res => {
  console.log(res);
  console.log(paramArr);
})














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



// 二分法查找的前提;数组必须为有序
var arr = [1,4,6,8,9,10,56];
function binarySearch(arr,findval,leftIndex,rightIndex){
		var midIndex = Math.floor((leftIndex+rightIndex)/2);
		var midval = arr[midIndex];

		if(midval>findval){
				//左边找
				binarySearch(arr,findval,leftIndex,midIndex);
				console.log("left");
		}else if(midval<findval){
				//右边找
				binarySearch(arr,findval,midIndex,rightIndex);
				console.log("right");
		}else {
				console.log("找到下标为" +midIndex);
		}
}
//测试:
binarySearch(arr,10,0,arr.length-1);

var arr = [1,4,6,8,9,10,56];
function findNumIndex (arr, value,leftIndex,rightIndex) {
  var middleIndex = Math.floor((leftIndex+rightIndex)/2)
  var middleValue = arr[middleIndex]
  if (middleValue < value) {
    findNumIndex(arr, value,middleIndex,rightIndex)
  } else if (middleValue > value) {
    findNumIndex(arr, value,leftIndex,middleIndex)
  } else {
    console.log(middleIndex);
  }
}
findNumIndex(arr,10,0,arr.length-1);
