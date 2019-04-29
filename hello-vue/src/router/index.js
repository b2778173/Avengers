import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'

Vue.use(Router);
export default new Router({
  routes: [
    {
      //首頁
      path:'/main',
      name:Main,
      component:Main
    },
    {
      //登入頁
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
