<template>
  <div>
  components: {
    'demo': () => import('@/demo') // 异步加载组件
  },    
    <div style="background:#CCC">
      <demo></demo>
    </div>
  </div>
</template>

<script>

export default {
  name: "MVVM",
  title: "proxy监测数组和对象",
  components: {
    'demo': () => import('@/demo') // 异步加载组件
  },
  data() {
    return {
      mvvm: null,
    };
  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleAdd() {
      // mvvm.list.push(Math.random())
    }
  }
}
// /* proxy 代理数组 */ 
// function ObserverableArray() {
//   return new Proxy([], {
//     // 因为实际上push也是一个属性 arr.push()相当于获取push
//     get(target, key) {
//       if (['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].indexOf(key) !== -1) {
//         console.log(key);
//       }
//       return target[key]
//     },
//     set(target, key, value) {
//       console.log(key + '变化了')
//       return true
//     }
//   })
// }
// var arr = ObserverableArray()
// arr.push(1) // 实际运行push时， 代理的get方法运行不止一次，因为push方法返回了数组操作后的长度，所以还会调用arr.length，get方法调用了两次，代码做了key的筛选，所以只打印了key值为push的那一次
// /* proxy 代理数组结束 */ 
// /* proxy 代理对象 */ 
// var target = {
//     name: 'Tom',
//     age: 24
// }
// var handler = {
//     get: function(target, key) {
//         console.log('getting '+key);
//         return target[key]; // 不是target.key
//     },
//     set: function(target, key, value) {
//         console.log('setting '+key);
//         target[key] = value;
//         return true
//     }
// }
// var proxy = new Proxy(target, handler)
// proxy.name     // 实际执行 handler.get
// proxy.age = 25 // 实际执行 handler.set
// /* proxy 代理对象结束 */ 

</script>

<style scoped>

</style>