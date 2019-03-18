import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home/Home.vue'
import Search from '../components/Search/Search.vue'
import My from '../components/My/My.vue'
import Deloyment from '../components/Deloyment/Deloyment.vue'
import Hierarchy from '../components/Hierarchy/Hierarchy.vue'
import Mystudent from '../components/Mystudent/Mystudent.vue'

export default new Router({
  routes: [
    {
      path : '',
      redirect : '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/deloyment',
      name: 'deloyment',
      component: Deloyment
    },
    {
      path: '/hierarchy',
      name: 'hierarchy',
      component: Hierarchy
    },
    {
      path: '/mystudent',
      name: 'mystudent',
      component: Mystudent
    }
  ],
  mode : 'history'
})
