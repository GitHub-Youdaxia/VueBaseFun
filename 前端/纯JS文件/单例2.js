


function Singgle () {
  function A () {
    this.title = '单例'
  }
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
