import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home.vue'
import Users from 'views/home/users/Users.vue'
import Welcome from 'views/home/Welcome.vue'
import Login from 'views/login/Login.vue'


Vue.use(VueRouter)

const routes = [{
    path: '',
    //redirect重定向
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
    children: [{
      path: '/welcome',
      component: Welcome
    }, {
      path:'/users',
      component:Users
    }]
  }

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//拦截路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  //回去token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
