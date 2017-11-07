import Vue from 'vue'
import Router from 'vue-router'
// import adminRouter from './admin'

import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [
      {
        name: 'admin',
        path: '',
        component: () => import('@/page/admin/home'),
        children: [
          {
            path: 'person/table',
            component: () => import('@/page/admin/person/table')
          }
        ]
      },
      {
        name: 'edit',
        path: 'person/edit/:id?',
        props: true,
        component: () => import('@/page/admin/person/edit')
      }
    ]
  }
  ]
})
