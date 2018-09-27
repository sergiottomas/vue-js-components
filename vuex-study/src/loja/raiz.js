import Vue from 'vue'
import Vuex from 'vuex'

import estado from './estado'
import getters from './getters'
import Tarefas from './modulos/tarefas/raiz';

Vue.use(Vuex)

export default new Vuex.Store({
  state: estado,
  getters: getters,
  modules: {
    Tarefas
  }
});
