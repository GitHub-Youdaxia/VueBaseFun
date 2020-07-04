
// var arr = []
// Array.prototype.push.call(arr, 1,2,3)
// console.log(arr)


let arr = []
let arrProxy = new Proxy(arr, {
  get: (target, prop) => {
    return prop in target ? target[prop] : undefined
  },
  set: (target, prop, value) => {
    target[prop] = value
    console.log(prop,value)
    return true
  }
})

arrProxy.push(1)






