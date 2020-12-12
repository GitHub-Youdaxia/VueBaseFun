


function A () {
  this.title = '单例'
}
function Singgle () {
  let single
  return () => {
    if (!single) {
      single = new A()
      return single
    } else {
      return single
    }
  }
}
var getA = Singgle()
console.log(getA() === getA())
