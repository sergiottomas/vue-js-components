<template>
  <div>
    <input type="text" v-model="nome_tarefa">

    <button @click="addTask()">Adicionar nova tarefa</button>
  </div>
</template>

<script>
export default {
  name: 'add-tarefa',
  data: data,
  methods: {
    addTask() {
      this.$store.commit("ADD_TAREFA", this.nome_tarefa);
    }
  }
};

function data() {
  return {
    nome_tarefa: ""
  }
}

</script>
