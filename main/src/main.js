import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WujieVue from 'wujie-vue2'

Vue.config.productionTip = false
Vue.use(WujieVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
