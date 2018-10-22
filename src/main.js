import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdCard)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
