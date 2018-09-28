import Vue from 'vue'
import App from './App.vue'

import VFormato from './directives/formato'
import meuPlugin from './plugin'

Vue.use(meuPlugin);

Vue.ola();

Vue.directive('formato', VFormato);

new Vue({
  el: '#app',
  render: h => h(App)
})
