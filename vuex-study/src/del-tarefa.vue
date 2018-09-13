<template>
  <button @click="apagar()">Apagar</button>
</template>

<script>
export default {
  name: 'del-tarefa',
  props: {
    tarefa: {
      required: true,
      type: String
    }
  },
  methods: {
    apagar() {
      this.$store.commit("DEL_TAREFA", this.tarefa);
    }
  }
}
</script>

