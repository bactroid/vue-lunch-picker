import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdCard)

new Vue({
  render: h => h(App)
}).$mount('#app')
