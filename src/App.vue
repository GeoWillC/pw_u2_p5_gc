<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>Estilo de h2</h2>
  <Contador Titulo="Contador1" :valor="10" />
  <Contador Titulo="Contador2" :valor="calculo()" />
  <Contador Titulo="Contador3" />
</template>

<script>
import Contador from "./components/ContadorPrincipal.vue";

export default {
  name: "App",
  components: {
    Contador,
  },
  methods: {
    calculo() {
      return 5 + 5 * 10;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1170ce;
  margin-top: 60px solid;
  margin: solid;
}
</style>
