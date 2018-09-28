import Vue from 'vue'
import App from './App.vue'

import meuPlugin from 'plugin-demo-lv-sergio';

Vue.use(meuPlugin);

Vue.ola();

new Vue({
  el: '#app',
  render: h => h(App)
})
