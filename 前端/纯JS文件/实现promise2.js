
function Promise(excutor) {
  let self = this
  self.value = null
  self.reason = null
  self.status = 'pending'
  self.onFulfillCallbacks = []
  self.onRejectedCallbacks = []
  
  function resolve (value) {
    if (self.status === 'pending') {
      self.value = value
      self.onFulfillCallbacks.forEach(item => {item()})
      self.status = 'fulfilled'
    }
  }
  function reject (reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.onRejectedCallbacks.forEach(item => {item()})
      self.status = 'rejected'
    }
  }
  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (v) {return v}
  onRejected = typeof onRejected === 'function' ? onRejected : function () {throw err}
  if (self.status === 'fulfilled') {
    return new Promise((resolve, reject) => {
      try {
        let x = onFulfilled(self.value)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  if (self.status === 'rejected') {
    return new Promise((resolve, reject) => {
      try {        
        let x = onRejected(self.reason)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  if (self.status === 'pending') {
    return new Promise((resolve, reject) => {
      self.onFulfillCallbacks.push(() => {
        let x = onFulfilled(self.value)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      })
      self.onRejectedCallbacks.push(() => {
        let x = onRejected(self.reason)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      })
    })
  }
}
Promise.prototype.catch = function (fn) {
  return this.then(null, fn)
}
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 3000);
})
p1.then(res => {
  console.log(res)
  return res + 'a'
}).then(res => {
  console.log(res)
})
p1.then(res => {
  console.log(res)
})