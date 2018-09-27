<template>
  <button @click="apagar(tarefa)">Apagar</button>
</template>

<script>
import {mapActions} from "vuex";


export default {
  name: 'del-tarefa',
  props: {
    tarefa: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions({
      apagar: 'delTarefa'
    })
  }
}
</script>

