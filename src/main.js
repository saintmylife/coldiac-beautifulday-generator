import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import VueTailwind from 'vue-tailwind'
import settings from './VueTailwindSettings'
import device from 'vue-device-detector-js'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.use(VueTailwind, settings)
Vue.use(device)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
