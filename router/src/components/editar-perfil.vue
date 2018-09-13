<template>
  <div>
    <h1>Editar Perfil</h1>
    <input type="text" v-model="newName">
    <input type="text" v-model="newDescription">
    <button v-on:click="save()">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "editar-perfil",
  props: ["name", "description"],
  mounted: () => {
    this.newName = this.name;
    this.newDescription = this.description;
  },
  data: () => {
    return {
      newName: "",
      newDescription: ""
    }
  },
  methods: {
    save() {
      this.$emit("pefil-atualizado", {
        newName: this.newName,
        newDescription: this.newDescription
      });
    }
  }
}
</script>

