import Vue from 'vue'
import Router from 'vue-router'
import adminRouter from './admin'

Vue.use(Router)

export default new Router({
  routes: [
    adminRouter
  ]
})
