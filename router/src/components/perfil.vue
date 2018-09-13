<template>
  <div>
    <h1>Perfil</h1>
    <h2>Sergio Tomas</h2>
    <p>Desenvolvedor Frontend - Senior</p>

    <router-link to="editar-perfil">Alterar Perfil</router-link>
  </div>
</template>

<script>
export default {
  name: "perfil"
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
