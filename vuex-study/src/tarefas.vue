<template>
  <div>
    <buscar-tarefa></buscar-tarefa>
    <ul>
      <li v-for="tarefa in tarefas">
        <del-tarefa :tarefa="tarefa"></del-tarefa>
        {{ tarefa }}
      </li>
    </ul>
  </div>
</template>

<script>
  import delTarefa from "./del-tarefa";
  import buscarTarefa from "./busca.vue";
  import { mapGetters } from "vuex";

  export default {
    name: "tarefas",
    components: {
      delTarefa,
      buscarTarefa
    },
    computed: {
      ...mapGetters({
        tarefas: 'listaTarefas'
      })
    }
  };
</script>

