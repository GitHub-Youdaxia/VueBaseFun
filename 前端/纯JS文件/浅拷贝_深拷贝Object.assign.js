function assign(obj, ...rest) {
  let res = rest.reduce((total, cur) => {
    Object.keys(cur).forEach(item => {
      total[item] = cur[item]
    })
    return total
  }, obj)
  return res
}
assign({},{a:'aa'},{a:'aaa',b:'ccc'})

function deepCopy (obj) {
  if (typeof obj === 'object') {
    var result = Array.isArray(obj)?[]:{}
    for(var p in obj) {
      result[p] = typeof obj[p] === 'object' ? deepCopy(obj[p]) : obj[p]
    }
  } else {
    var result = obj
  }
  return result
}

var obj = {arr:[1,2,3], id:'1111',user:{name:'111'}}
console.log(deepCopy(obj));
