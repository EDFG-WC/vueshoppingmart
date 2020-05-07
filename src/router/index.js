import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
import Goods from '../components/goods/Goods'
import Params from '../components/goods/Params'
import Categories from '../components/goods/Categories'
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
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/goods',
        component: Goods
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/categories',
        component: Categories
      }
    ]
  }
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
  // 没有token直接跳转到login
  if (!tokenStr) {
    return next('/login')
  } else {
    next()
  }
})
// 3.创建router实例
export default router
