import toastComponent from './extend/toast'
import confirm from './extend/confirm'
// 全局自定义事件对象
import customEvent from './customEvent' 
const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
    // (1)将自定义事件作为一个全局对象来使用
    window.customEvent = customEvent // 在vue项目中可以被Vue.prototype.EventBus = new Vue()取代

    // (2)注册全局组件
    // require.context模块返回一个函数，这个函数可以接收一个参数
    // 导出的方法有 3 个属性： resolve, keys, id。
    // resolve 是一个函数，它返回请求被解析后得到的模块 id。
    // keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
    // id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到    
    let contexts = require.context('./components', false, /\.vue$/)
    // console.log(contexts.id);
    // console.log(contexts.keys());
    contexts.keys().forEach(component => {
      // console.log(contexts(component));
        // debugger;
        let componentEntity = contexts(component).default
        // 使用内置的组件名称 进行全局组件注册
        Vue.component(componentEntity.name, componentEntity)
    })    

    // (3) eventBus 和(1)的作用是类似的
    // 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
    // eventBus也有不方便之处, 当项目较大,就容易造成难以维护的灾难
    // 挂到原型上
    Vue.prototype.EventBus = new Vue()
    
    // (4) 注册Function下的组件为全局注册，为了方便写demo，能迅速在页面上'功能Demo'看到
    let contextsFunction = require.context('./Function', false, /\.vue$/)
    window.functionDemo = []
    contextsFunction.keys().forEach(component => {
        let componentEntity = contextsFunction(component).default
        // // 使用内置的组件名称 进行全局组件注册
        functionDemo.push({name:componentEntity.name,title:componentEntity.title})
        Vue.component(componentEntity.name, componentEntity)
    })

    // (5) 使用vue的extend，以vue文件为基础组件，返回一个可以创建vue组件的特殊构造函数
    const ToastConstructor =  Vue.extend(toastComponent)
    function showToast(text,duration = 2000){
      const toastDom = new ToastConstructor({
          el : document.createElement('div'),
          data(){
              return {
                  text:text,
                  show:true
              }
          }
      })
  　　//在body中动态创建一个div元素，后面自动会把它替换成整个vue文件内的内容
      document.body.appendChild(toastDom.$el)
      setTimeout(() => {
        // toastDom.show=false
      },duration)
    }
    Vue.prototype.$toast = showToast
    // (6) 自定义确认弹窗
    Vue.prototype.$confirm2 = confirm

































    // 学用
    // // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {
    //   // 逻辑...
    // }
  
    // // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //   }
    //   ...
    // })
  
    // // 3. 注入组件选项
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    //   ...
    // })
  
    // // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //   // 逻辑...
    // }
  }

  export default MyPlugin