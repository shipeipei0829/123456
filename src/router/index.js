import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/home'
import List from '@/components/view/list'
import Shop from '@/components/view/shop'
import Mine from '@/components/view/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '*',
      redirect: '/list'
    }

  ]
})
