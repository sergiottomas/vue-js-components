<template>
  <div>
    <h1>Lista de {{ titulo }}</h1>
    <ul>
      <li v-for="item in lista">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "lista",
    props: ["lista", "titulo"]
  };
</script>

