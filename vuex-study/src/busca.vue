<template>
  <div>
    <label for="Buscar por"></label>
    <input type="text" v-model="termo">
    <ul v-if="termo.length > 3">
      <li v-for="tarefa in resultado(termo)">{{ tarefa }}</li >
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "buscar-tarefa",
  data() {
    return {
      termo: ""
    };
  },
  computed: {
    ...mapGetters({
      resultado: 'buscarTarefas'
    })
  }
}
</script>
