<template>
  <div>
    <input type="text" v-model="nome_tarefa">

    <button @click="submitTask()">Adicionar nova tarefa</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";


export default {
  name: 'add-tarefa',
  data: data,
  methods: {
    ...mapActions({
      addTask: 'addTarefa'
    }),
    submitTask() {
      if (this.nome_tarefa != '')
        this.addTask(this.nome_tarefa);

      this.nome_tarefa = '';
    }
  }
};

function data() {
  return {
    nome_tarefa: ""
  }
}

</script>
