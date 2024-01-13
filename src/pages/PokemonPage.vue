<template>
  <div>
    <PokemonImage :pokemonId="12" v-bind:showPokemon="false"></PokemonImage>
    <PokemonOpciones ></PokemonOpciones>
  </div>
</template>
  
<script>
import PokemonImage from '../components/PokemonImage.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'
import obtenerIdPokemonFachada from '../helper/pokemonHelpers.js'

obtenerIdPokemonFachada

export default {
  components: {
    PokemonOpciones,
    PokemonImage,
  
  },
}
</script>
  
<style scoped></style>