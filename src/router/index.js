import Vue from 'vue'
import VueRouter from 'vue-router'

import login from 'views/login/login.vue'

import home from 'views/home/home.vue'
import welcome from 'views/home/welcome.vue'

import users from 'views/users/users.vue'

import powerList from 'views/power/powerList.vue'
import roles from 'views/power/roles.vue'

import goodsData from 'views/goods/goodsData.vue'
import goodsList from 'views/goods/goodsList.vue'
import goodsType from 'views/goods/goodsType.vue'

import orderList from 'views/order/orderList.vue'

import dataForm from 'views/data/dataForm.vue'


Vue.use(VueRouter)

const routes = [{
    path: '',
    //redirect重定向
    redirect: '/login'
}, {
    path: '/login',
    name: 'login',
    component: login
}, {
    path: '/home',
    name: 'home',
    component: home,
    // redirect: '/welcome',
    children: [{
        path: 'welcome',
        component: welcome
    }, {
        path: '/users',
        component: users
    }, {
        path: '/roles',
        component: roles
    }, {
        path: '/rights',
        component: powerList
    }, {
        path: '/goods',
        component: goodsList
    }, {
        path: '/params',
        component: goodsData
    }, {
        path: '/categories',
        component: goodsType
    }, {
        path: '/orders',
        component: orderList
    }, {
        path: '/reports',
        component: dataForm
    }]
}]
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
