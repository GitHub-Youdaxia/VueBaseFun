
function def (obj, key) {
    Object.defineProperty(obj, key, {
        value: function(...args) {
            const result = Array.prototype[key].apply(this, args);
            console.log(this,'我的数据被改变了，视图该更新啦');
            return result;
        }
    });
}
 // 变异方法名称
 var methodsToPatch = ['push','pop','shift','unshift','splice','sort','reverse']
 var specialArr = []
 methodsToPatch.forEach(item => {
  def(specialArr, item);
 })
 var arr = []
 arr.__proto__ = specialArr
 arr.push(1,2)



function def(obj, key) {
  Object.defineProperty(obj, key, {
    value: function (...arg) {
      let result = Array.prototype[key].apply(this,arg)
      console.log('视图修改');
      return
    }
  })
}
var methods = ['push','pop','shift','unshift','sort','splice','reverse']
var specialArr = []
methods.forEach(item => {
  def(specialArr,item)
})
var arr = []
arr.__proto__=specialArr
arr.push(1,2)



















console.log('start')
setTimeout(() => {
  new Promise((resolve,reject) => {
    console.log('1')
    setTimeout(() => {
      console.log('2')
      resolve()
    }, 5000);
  }).then(res =>{
    console.log('3')
  }).finally(res => {
    console.log('4')
  })
}, 1000);
new Promise((resolve,reject) => {
  console.log('5')
  setTimeout(() => {
    console.log('6')
    resolve()
  }, 5000);
}).then(res =>{
  console.log('7')
}).finally(res => {
  console.log('8')
})
console.log('end')
// start  5  end  1 6 7 8 2 3 4