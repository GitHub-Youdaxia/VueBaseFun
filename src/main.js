// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/index.styl'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'vue-cookies'
import store from './store'
import myPlugin from './myPlugin'
import  './permission'
import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'

Vue.use(Cookies)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: './static/img/error.gif',
  loading: './static/img/loading.gif',
  attempt: 1
})

Vue.use(myPlugin)

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
Vue.config.productionTip = false

const state = Vue.observable({ count: 0 })
Vue.prototype.myState = state
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// var fn1 = () => {
//   console.log('fn1')
// };
// var fn2 = () => {
//   console.log('fn2')
// };
// var fn3 = () => {
//   console.log('fn3')
// };
// var fn4 = () => {
//   console.log('fn4')
// };
// [fn1, fn2, fn3, fn4].reduceRight((total, current) => {
//   return () => {
//     current();
//     total();
//   }
// })()
