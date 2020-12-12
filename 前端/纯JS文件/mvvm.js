

// 实现Observe
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
// 改变数组自身内容的7个方法
const arrayMethods = Object.create(Array.prototype)
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(method => {
  Object.defineProperty(arrayMethods, method,{
    enumerable: true,
    configurable: true,
    value (...rest) {
     return Array.prototype[method].apply(this, rest)
      console.log('数组变化了');
    }
  })
})
function protoToArr (arr, propto) {
  arr.__proto__ = propto
}
function Observe(val) {
  this.value =val
  def(val, '__ob__',this)
  if (Array.isArray(val)) {
    protoToArr(val, arrayMethods)
  } else {
    walk(val)
  }
  function walk (val) {
    Object.keys(val).forEach(key => {
      defineReactive(val, key)
    })
  }
  function defineReactive(obj,key) {
    var value = obj[key]
    if (typeof value === 'object') {
      new Observe(value)
    }
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        return value
      },
      set (newVal) {
        console.log('新值',newVal);
        if (newVal === value) {
          console.log('和以前值一样');
          return
        }
        value = newVal
      }
    })
  }
}

var obj = {
  name: 'aaa',
  arr: [],
  info:{
    age: 29
  }
}
new Observe(obj)




// 虚拟节点

var vnode1 = {
  tag: '',
  iscomment:'',
  attrs:{
    id: 'aaa'
  },
  
}