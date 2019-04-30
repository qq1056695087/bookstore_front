import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      // children: [
      //   {
      //     path: 'profile',
      //     component: UserProfile
      //   },
      //   {
      //     path: 'posts',
      //     component: UserPosts
      //   }
      // ]
    }
  ]
})
