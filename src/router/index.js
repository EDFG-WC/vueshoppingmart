import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
// 1.注入插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 2.定义路由
const router = new VueRouter({
  routes
})

// 2.5 挂载路由导航
router.beforeEach((to, from, next) => {
  // to代表将要访问的路径; from代表从哪个路径里来; next()是一个函数, 表示放行: next()放行, next('/login')强制跳转
  if (to.path === '/login') return next()
  // 有token, tokenStr是true, 没有是false.
  const tokenStr = window.sessionStorage.getItem('token')
  console.log(!tokenStr)
  // 没有token直接跳转到login
  if (!tokenStr) {
    return next('/login')
  } else {
    next()
  }
})
// 3.创建router实例
export default router
