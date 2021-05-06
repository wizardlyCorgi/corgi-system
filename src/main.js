import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局注册组件
import globalComponent from '@/components/globalComponent'
// 全局挂载utils
Vue.use(globalComponent)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
