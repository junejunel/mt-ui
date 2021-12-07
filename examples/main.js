import Vue from 'vue'
import App from './App.vue'
import MtUI from '../packages'

Vue.config.productionTip = false
Vue.use(MtUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
