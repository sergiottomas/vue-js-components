<template>
  <div id="app">
    <p> {{ nome | meuFiltro }}</p>
    <p>{{ outroNome }}</p>

    <input type="text" v-model="outroNome">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nome: 'Sergio'
    }
  },
  computed: {
    outroNome: {
      get: function (){
        return this.nome.toUpperCase();
      },
      set: function(newValue) {
        this.nome = newValue.substring(0, 3);
      }
    }
  },
  filters: {
    meuFiltro(valor) {
      valor = valor + " - Bem filtrado!";

      return valor;
    }
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
