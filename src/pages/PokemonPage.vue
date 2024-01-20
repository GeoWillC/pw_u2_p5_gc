<template>
  <h1>Adivina el pokemon</h1>
  <PokemonOpciones />
  <PokemonImage :pokemonId="12" :showPokemon="true"></PokemonImage>
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
  //montar el componente
  mounted() {
    console.log("se monto el componente pokemon page");
    this.construirLoad();
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await obtenerIdPokemonFachada;
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
    }
  }

}
</script>
  
<style scoped></style>