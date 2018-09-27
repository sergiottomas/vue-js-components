<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <add-tarefa></add-tarefa>
    <tarefas></tarefas>
  </div>
</template>

<script>

import AddTarefa from './add-tarefa.vue';
import tarefas from "./tarefas.vue";
import es6Promise from "es6-promise";
import {mapState} from 'vuex';

es6Promise.polyfill();

export default {
  name: 'app',
  components: {AddTarefa, tarefas},
  computed: {
    ...mapState(['appName'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
