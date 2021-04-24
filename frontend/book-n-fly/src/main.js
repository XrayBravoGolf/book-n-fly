import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { myAxios } from '@/utils/axiosConfig.js'

Vue.config.productionTip = false
Vue.prototype.$axios = myAxios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
