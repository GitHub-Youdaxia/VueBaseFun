import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import notFound from '@/views/notFound'
import Login from '@/views/Login'

Vue.use(Router)

export const constantRoutes =  [
  { path: '*', redirect: '/404', hidden: true },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    component: Layout
  },
  {
    path: '/404',
    name: 'notFound',
    component: notFound,
    hidden: true

  },
  {
    path: '/myServe',
    name: '我的服务',
    component: Layout,
    children: [{
      path: '/order',
      name: '我的工单',
      component: () => import('@/views/myStudy/order'),
    },
    {
      path: '/orderDetail',
      name: '工单详情',
      component: () => import('@/views/myStudy/orderDetail'),
    },
    {
      path: '/todo',
      name: '我的待办',
      component: () => import('@/views/myStudy/todo'),
    },
    {
      path: '/article',
      name: '我的文章',
      component: () => import('@/views/myStudy/article'),
    },
    {
      path: '/other',
      name: '功能Demo',
      component: () => import('@/views/myStudy/other'),
    }
  ]
  },
]

export const asyncRoutes = [
  {
    path: '/secret',
    component: Layout,
    name: '秘密',
    children: [
      {
        path: '/secret1',
        component: () => import('@/views/secret/secret1'), // Parent router-view
        name: '秘密功能1',
      },
      {
        path: '/secret2',
        component: () => import('@/views/secret/secret2'),
        name: '秘密功能2',
      }
    ]
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
// dynamically add accessible routes
// console.log(asyncRoutes)
// router.addRoutes(asyncRoutes)
// console.log(router)
export default router