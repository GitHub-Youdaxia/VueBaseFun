import Vue from 'vue'
const state = Vue.observable({ count: 0 })
Vue.prototype.mySate = state
