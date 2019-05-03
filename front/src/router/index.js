import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/Index'
import BookDetail from '@/components/page/BookDetail'
import BookList from '@/components/page/BookList'
import UserCenter from '@/components/page/UserCenter'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/index'
        },
        {
          path: '/bookdetail/:bookid',
          name: '详情',
          component: BookDetail
        },
        {
          path: '/index',
          name: '首页',
          component: BookList
        },
        {
          path: '/usercenter',
          name: '用户中心',
          component: UserCenter
        }
      ]
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
