import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import tab from '@/components/user'
import c1 from '@/components/1'
import c2 from '@/components/2'
import c3 from '@/components/3'
import c4 from '@/components/4'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'tab',
      component: tab,
      redirect: {name: 'c1'},
      children:[{
        path: '/c1',
        name: 'c1',
        component: c1
      },{
        path: '/c2',
        name: 'c2',
        component: c2
      },{
        path: '/c3',
        name: 'c3',
        component: c3
      },{
        path: '/c4',
        name: 'c4',
        component: c4
      }]
    }
  ]
})
