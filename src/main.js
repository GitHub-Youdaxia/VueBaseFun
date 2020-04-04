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

Vue.use(Cookies)

Vue.use(myPlugin)

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
