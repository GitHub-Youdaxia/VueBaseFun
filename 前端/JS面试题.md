### JavaScript 如何实现一个类，怎么实例化这个类？

1. .map如何实现

```js
Array.prototype.newMap = function(fn) {
　　var newArr = [];
		for(var i = 0; i<this.length; i++){
		　　newArr.push(fn(this[i],i,this))
		}
　　return newArr;
}
var arr = ['a', 'b', 'c']
arr.newMap((currentValue,index,arr)=>{
	console.log("newMap当前元素"+currentValue)
	console.log("newMap当前索引"+index)
	console.log("newMap数组对象"+arr)
	return currentValue + currentValue
})
```
2. Map如何实现

```js
/** 
     *  
     * 描述：js实现的map方法 
     * @returns {Map} 
     */  
    function Map(){  
     var struct = function(key, value) {  
      this.key = key;  
      this.value = value;  
     };  
    // 添加map键值对  
     var put = function(key, value){  
       for (var i = 0; i < this.arr.length; i++) {  
       if ( this.arr[i].key === key ) {  
        this.arr[i].value = value;  
        return;  
       }  
      };  
      this.arr[this.arr.length] = new struct(key, value);  
     };  
    //  根据key获取value   
     var get = function(key) {  
      for (var i = 0; i < this.arr.length; i++) {  
       if ( this.arr[i].key === key ) {  
        return this.arr[i].value;  
       }  
      }  
     return null;  
     };  
    //   根据key删除  
     var remove = function(key) {  
      var v;  
      for (var i = 0; i < this.arr.length; i++) {  
       v = this.arr.pop();  
       if ( v.key === key ) {  
        continue;  
       }  
       this.arr.unshift(v);  
      }  
     };  
    //   获取map键值对个数  
     var size = function() {  
      return this.arr.length;  
     };  
    // 判断map是否为空    
     var isEmpty = function() {  
      return this.arr.length <= 0;  
     };  
     this.arr = new Array();  
     this.get = get;  
     this.put = put;  
     this.remove = remove;  
     this.size = size;  
     this.isEmpty = isEmpty;  
    }
    var map=new Map();  
    map.put("num",1);  
    map.put("ss","wss");  
    alert(map.size());  
    alert(map.get("num"));  
    paraArr.remove("num");  
    alert(map.size());  
    alert(map.get("num"));      
```
3. 两个数组求并集，交集，差集

```js

    var a = [1, 2, 3]
 
    var b = [2, 4, 5]
		console.log({a,b})
    var aSet = new Set(a)
    var bSet = new Set(b)
    
    // 并集
    var union = Array.from(new Set(a.concat(b))) // [1,2,3,4,5]
    console.log('并集',union)
    
    // 交集
		var intersection = Array.from(new Set(a.filter(v => bSet.has(v)))) // [2]
		console.log('交集',intersection)
    
    // 差集
		var differenceNew = Array.from(new Set(a.concat(b).filter(v => (aSet.has(v) && !bSet.has(v))||(!aSet.has(v) && bSet.has(v))))) //  [1,3,4,5]
		console.log('差集',differenceNew)

```
4. 不用sort的方法实现排序

```js

var arr = [5,0,-56,90,12];
var flag = false;//标志位进行优化，数组本来就是有序序列的话，无需再排序
//先进行大的排序
for(var i=0;i<arr.length-1;i++){
//小的排序
		for(var j=0;j<arr.length-1-i;j++){
				//比较
				if(arr[j]>arr[j+1]){
						//交换
						var temp = arr[j];

						arr[j] = arr[j+1];
						arr[j+1] = temp;
						flag = true;
				}
		}
		//此部分为优化，已排序的话，无需再次排序
			if(flag){
				flag=false;
		}else{
				break;//已排序，无需交换
		}
}
 
 console.log(arr) // [-56, 0, 5, 12, 90]

```
4. 二分法查找

```js

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

```