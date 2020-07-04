
//  使用场景，点击只能触发一次
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}
function Say () {
  console.log('hello')
}
function World () {
  console.log('world')
}
let onceWorld = once(World)

for (let index = 0; index < 3; index++) {
  Say()  
}
for (let index = 0; index < 3; index++) {
  onceWorld()  
}