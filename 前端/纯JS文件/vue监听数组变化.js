
const arrayProto = Array.prototype // 获取Array的原型
 
function def (obj, key) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        value: function(...args) {
            console.log(key); // 控制台输出 push
            console.log(args); // 控制台输出 [Array(2), 7, "hello!"]
            
            // 获取原生的方法
            let original = arrayProto[key];
            // 将开发者的参数传给原生的方法，保证数组按照开发者的想法被改变
            const result = original.apply(this, args);
 
            // do something 比如通知Vue视图进行更新
            console.log('我的数据被改变了，视图该更新啦');
            this.text = 'hello Vue';
            return result;
        }
    });
}
 
// 新的原型
let obj = {
    push() {}
}
 
// 重写赋值
def(obj, 'push');
 
let arr = [0];
 
// 原型的指向重写
arr.__proto__ = obj;
 
// 执行push
arr.push([1, 2], 7, 'hello!');
console.log(arr);


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