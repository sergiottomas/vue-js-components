<template>
  <div id="app">
    <lista :lista="carros" titulo="Carros"></lista>
    <lista :lista="avioes" titulo="Avioes"></lista>
  </div>
</template>

<script>
import Carro from './servicos/carros'
import Aviao from './servicos/avioes'
import Lista from './Lista'
import avioes from './servicos/avioes';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carros: {},
      avioes: {}
    }
  },
  components: {
    Lista
  },
  mounted() {
    Carro.lista().then(dado => this.carros = dado.data);
    Aviao.lista().then(dado => this.avioes = dado.data);
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
