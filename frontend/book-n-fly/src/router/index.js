import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '../views/Home.vue'
import { myAxios } from '@/utils/axiosConfig.js';


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
  {
    path: '/schedule',
    component: Schedule,
    meta:{
      needAuth = true
    }
  },
  {
    path: '*',
    component: resolve => require(['@/views/404'], resolve)
  }
]
function authenticated(){

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
