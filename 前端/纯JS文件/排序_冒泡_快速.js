let arr = [3,5,1,2,7,8,4,5,3,4];
let sortedArr = bubbleSort(arr);

function bubbleSort (arr) {
	let len = arr.length
  for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
			}
		}
	}  
	return arr
}


1

// function quickSort(arr) {
// 	if (arr.length <= 1) { // 如果数组长度小于等于1无需判断直接返回即可
// 		return arr;
// 	}
// 	var pivotIndex = Math.floor(arr.length / 2); // 取基准点
// 	var pivot = arr.splice(pivotIndex, 1)[0]; // 取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
// 	var left = []; // 存放比基准点小的数组
// 	var right = []; // 存放比基准点大的数组
// 	for (var i = 0; i < arr.length; i++) {  // 遍历数组，进行判断分配
// 		if (arr[i] < pivot) {
// 			left.push(arr[i]); // 比基准点小的放在左边数组
// 		} else {
// 			right.push(arr[i]); // 比基准点大的放在右边数组
// 		}
// 	}
// 	//递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
// 	return quickSort(left).concat([pivot], quickSort(right));
// };
var arr = [1, 2, 3, 55, 7, 99, 8, 100, 1021];
var sortedArr = quickSort(arr);
console.log(sortedArr);
// 快速排序                                                          
function quickSort(arr) {
	if (arr.length === 0) {
		return arr
	}

	let middleIndex = Math.floor(arr.length - 1)/2
	let middleValue = arr.splice(middleIndex,1)[0]
	let left = []
	let right = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > middleValue) {
			right.push(arr[i])
		}
		if (arr[i] < middleValue) {
			left.push(arr[i])
		}
	}
	return quickSort(left).concat([middleValue], quickSort(right))
}
var max = 18
var mv = [{m:5,v:10},{m:10,v:5},{m:2,v:6},{m:6,v:18}]
var arr = []
var len = mv.length
for (let i = 0; i < len; i++) {
	arr.push([mv[i]])
	for (let j = i+1; j < len; j++) {
		arr.push([mv[i],mv[j]])
		for (let k = j+1; k < len; k++) {
			arr.push([mv[i],mv[j],mv[k]])
		}	
	}	
}
Math.max(...arr.filter(item => {
	var sum = item.reduce((total, cur) => {
		total += cur.m
		return total
	}, 0)
	return sum <= max
}).map(item => {
	var jiazhi = item.reduce((total, cur) => {
		total += cur.v
		return total
	}, 0)
	return jiazhi
}))
