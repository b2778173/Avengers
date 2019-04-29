import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            //首頁
            path: '/main',
            name: Main,
            component: Main
        },
        {
            //登入頁
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/AllProducts',
            name: 'AllProducts',
            component: () =>
                import ('./views/AllProducts.vue')
        },
        {
            path: '/proShelfManagement',
            name: 'proShelfManagement',
            component: () =>
                import ( /* webpackChunkName: "proShelfManagement" */ './views/ProShelfManagement.vue')
        }
    ]
})