import Vue from 'vue'
import VueRouter from 'vue-router'
import * as API from '@/api.js'
import { myAxios } from '@/utils/axiosConfig.js'

import Login from '@/views/Login.vue'
import Schedule from '@/views/Schedule.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  // {
  //   path: '/schedule',
  //   component: Schedule,
  //   meta: {
  //     needAuth: true
  //   }
  // },
  {
    path: '*',
    component: resolve => require(['@/views/404'], resolve)
  }
]
function authenticated () {
  myAxios.get(API.CHECKLOGIN).then(
    res => {
      if (res.request.status !== 200) { //maybe 403
        return false
      } else {
        return true
      }
    },
    error => {
      return false
    }
  );
}
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.matched.some((record) => record.meta.needAuth)) {
    if (!authenticated()) {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
