import router from './router'
import store from './store'
import { Message } from 'element-ui'
// 
store.dispatch('permission/initRoutes')





const whiteList = ['/login'] // no redirect whitelist ,'/dashboard'
// 定义路由跳转之前的处理
router.beforeEach(async(to, from, next) => {
  next()
  return
  // determine whether the user has logged in
  const hasToken = true
  if (hasToken) {
    // 如果有token，且要跳转到登录页面，则直接跳转到主界面
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // 第一次从登录页面进来还没有获取用户角色，会走else去获取角色和动态添加路由定义,之后在系统页面各个功能跳转时，有角色了就走if直接允许路由跳转 determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        // console.log('hasRoles')
        next()
      } else {
        const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
        // dynamically add accessible routes
        router.addRoutes(accessRoutes)
        // hack method to ensure that addRoutes is complete
        // set the replace: true, so the navigation will not leave a history record
        next({ ...to, replace: true })        
      }
    }
  } else {
    /* has no token 没有token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单中就可以访问 in the free login whitelist, go directly
      next()
    } else {
      // 不在白名单里把要访问的地址信息带到登录页面，登录页面获取地址信息，登录成功后直接跳到这个页面 other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {

})

