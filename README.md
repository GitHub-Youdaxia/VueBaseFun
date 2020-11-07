# 待办
    常用方法，例如日期格式化1
    
    

# 代码里实现的功能
     自动注册某一目录下vue文件为全局组件,用来写功能demo
     扩展了elementUI的switch组件，在切换可以加异步处理来决定要不要切换

## vue项目路由配置
        路由配置第一层级，对应项目菜单第一层级
        路由配置第一层级的children，对应项目菜单第二层级
        在APP.vue的<router-view></router-view>渲染路由第一层配置的component，
        登录页面
            path: '/login',
            component: Login,  
        主页面
            path: '/',
            component: Layout, 
## customEvent 和 EventBus(一个vue实例化对象，定义成全局或挂载到Vue.prototype,也可用来监听自定义事件和触发自定义事件)
    在window对象上挂载了一个全局对象customEvent，可以添加，触发，移除自定义的事件，用于处理不同文件，组件内数据传输
    例如在a文件建立websocket的链接，在另外一个b文件想要处理来自websocket返回的数据，解决办法是在a文件中触发自定义事件，在b文件中监听该自定义事件，在b文件destroy时，移除该自定义事件

# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
