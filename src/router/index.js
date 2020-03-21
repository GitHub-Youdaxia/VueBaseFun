import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import Login from '@/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'dashbord',
      component: Layout
    },
    {
      path: '/myServe',
      name: '我的服务',
      component: Layout,
      children: [{
        path: '/order',
        name: '我的工单',
        component: () => import('@/components/order'),
      },
      {
        path: '/orderDetail',
        name: '我的工单 / 工单详情',
        component: () => import('@/components/orderDetail'),
      },
      {
        path: '/todo',
        name: '我的待办',
        component: () => import('@/components/todo'),
      }]
    },
  ]
})
