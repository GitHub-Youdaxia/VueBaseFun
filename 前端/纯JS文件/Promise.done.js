Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => {
        throw reason
      }, 0);
    });
  return this
};
Promise.prototype.done2 = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => {
        throw reason
      }, 0);
    });
};

Promise.resolve().then(res => {
  console.log('AA')
}).then(res => {
  console.log(res, 'BB')
}).done(res => {
  console.log('CC')
}).done2(res => {
  console.log('DD')
})
console.time()
console.timeEnd()
setTimeout(() => {
  console.log('定时器')
}, 0);
for (let index = 0; index < 10000 * 10000 * 20; index++) {

}
console.log('1s后')
Promise.resolve().then(res => {
  console.log('AA')
  for (let index = 0; index < 10000 * 10000 * 20; index++) {

  }
  console.log('1s后')
  setTimeout(() => {
    console.log('内层定时器')
  }, 0);
  Promise.resolve().then(res => {
    for (let index = 0; index < 10000 * 10000 * 20; index++) {

    }
    console.log('1s后')    
    console.log('内层AA')
  }).then(res => {
    for (let index = 0; index < 10000 * 10000 * 20; index++) {

    }
    console.log('1s后')
    console.log('内层BB')
  })
}).then(() => {
  console.log('BB')
}).then(() => {
  console.log('CC')
})

for (let index = 0; index < 10000 * 10000 * 20; index++) {

}
console.log('1s后')
