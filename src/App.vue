<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Contador :Titulo = "1"/>
  <Contador :Titulo = "2"/>
  <Contador :Titulo = "3"/>
</template>

<script>
import Contador from './components/ContadorPrincipal.vue';

export default {
  name: 'App',
  components: {
    Contador
  }
}
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
