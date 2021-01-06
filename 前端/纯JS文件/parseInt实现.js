const _parseInt = (str, radix = 10) => {
  //处理前后有空格的字符串
   let str_0 = String(str).trim();
   let str_type = typeof str_0;

   //处理返回为NaN的情况
   if (str_type !== 'string' && str_type !== 'number') {
       return NaN;
   }

  //判断传入的str是否为“w123r3y5",因为parseInt("w123ry5")->NaN;
   if (!str_0.match(/^\d/)) { 
       return NaN;
   }

   //处理radix
   if (radix < 2 || radix > 36) {
       return NaN;
   }

   //从字符串中提取可以转换为数字的部分，如“123r3y5”->"123"
   let str_ = String(str_0).match(/\d+/)[0];
   let length = str_.length;
   let res = 0;
   for (let i = 0; i < length; i++) {
       let arr = str_.split('').reverse().join('');
       res += Math.floor(arr[i]) * Math.pow(radix, i);
   }

   return res;
}

//测试结果
console.log(_parseInt("10.2"));//10
console.log(_parseInt("10.2", 8));//8
console.log(_parseInt("r123t5y", 8));//NaN



var parseInt2 = (param, radix) => {
  radix = radix || 10
  var str0 = String(param).trim()
  if (!'string,number'.includes(typeof str0)){
    return NaN
  }
  if (radix < 2 || radix > 36) {
    return NaN
  }
  if (!str0.match(/\d/)) {
    return NaN
  }
  var numStr = str0.match(/\d+/)[0]
  let arr = numStr.split('').reverse()
  let res = 0
  arr.forEach((item,index) => {
    res+=item* Math.pow(radix,index)
  })
  return res
}
console.log(parseInt2("10.2"));//10
console.log(parseInt2("11.2", 8));//8
console.log(parseInt2("r123t5y", 8));//NaN
