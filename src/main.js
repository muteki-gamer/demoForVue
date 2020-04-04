import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui 按需引入
import 'ASSETS/elementUi/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
