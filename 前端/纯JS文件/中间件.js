
var app = {
  middleWares: [],
  use (arg) {
    if (typeof arg === 'function') {
      this.middleWares.push(arg)
    }
    if (Array.isArray(arg)) {
      this.middleWares.push(...arg)
    }
  },
  go (ctx) {
    var p = new Promise((resovel, reject) => {
      this.middleWares.reduceRight((total, current) => () => current(ctx, total), () => {resovel(ctx)})()
    })
    return p
  }
}
var fn1 = function (ctx, next) {
  setTimeout(() => {
    ctx.name = '小明'
    console.log('花1s中取个名字')
    next()
  }, 1000);
}
var fn2 = function (ctx, next) {
  setTimeout(() => {
    ctx.sayHello = (str) => {
      console.log(str)
    }
    ctx.sayHello('大家好')
    next()
  }, 2000);
}
var fn3 = function (ctx, next) {
  ctx.age = 29
  next()
}
var fn4 = function (ctx, next) {
  console.log('许愿中...')
  ctx.yuanwang = '开心'
  setTimeout(() => {
    next()
  }, 3000);
}
app.use([fn1,fn2,fn3,fn4])
app.go({}).then(res => {
  console.log('ctx的最终值是：', res)
})