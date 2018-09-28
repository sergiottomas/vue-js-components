<template>
  <div id="contador">
    <p>Total: {{ total }}</p>
    <button @click="subtrair"> - </button>
    <button @click="somar"> + </button>
  </div>
</template>

<script>
export default {
  name: 'contador',
  data () { return { total: 0 } },
  methods: {
    subtrair() {
      this.total--;
    },

    somar() {
      this.total++;
    }
  }
};
</script>
