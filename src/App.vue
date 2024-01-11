<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Estilo de h2</h2>
    <Contador Titulo="Contador1" :valor="10" />
    <Contador Titulo="Contador2" :valor="calculo()" />
    <Contador Titulo="Contador3" /> -->
  <!-- <Calculadora></Calculadora> -->
    <!-- <Pregunta></Pregunta> -->
    <Pokemon></Pokemon>
</template>

<script>
import Contador from "./components/ContadorPrincipal.vue";
import Calculadora from "./components/Calculadora.vue";
import Pregunta from "./components/Pregunta.vue";
import Pokemon from "./components/Pokemon.vue";

export default {
  name: "App",
  components: {
    Contador,
    Calculadora,
    Pregunta,
    Pokemon
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
