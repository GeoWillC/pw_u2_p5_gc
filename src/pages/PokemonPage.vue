<template>
  <h1 v-if="pokemonGanador===null">Espere porfavor estamos cargando la información</h1>
  <div v-if="pokemonGanador!==null">
  <h1>Adivina el pokemon</h1>
  <PokemonOpciones v-on:seleciono="revisarClick($event)" :pokemons="pokemonArray"/>
  <PokemonImage :pokemonId="pokemonGanador.id" :showPokemon="mostrarPokemon"></PokemonImage>
</div>
</template>
  
<script>
import PokemonImage from '../components/PokemonImage.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'
import obtenerIdPokemonFachada from '../helper/pokemonHelpers.js'

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
  beforeCreate() {
    console.log("Antes del montar el componente")
  },
  created() {
    //Creado no montado 
  },
  beforeMount(){
    //Cuando el componente esta creado y listo para montar el componente
    console.log("Antes de que se monte el componente")
  },
  beforeUpdate(){
    console.log("Antes de que se actualice el componente")
  },
  beforeDestroy(){
    //Ejecutar algo antes de que se destruya
    console.log("Antes de que se destruya")
  },
  destroyed(){
    consoles.log("Destruido")
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await obtenerIdPokemonFachada();
      console.log("Usando el componente de arreglos");
      console.log(arrayPokemons)
      this.pokemonArray=arrayPokemons
      console.log("Arreglo de pkemon"+this.pokemonArray);
      const indiceGanador=Math.floor(Math.random()*4);
      this.pokemonGanador=this.pokemonArray[indiceGanador];
    },
    revisarClick(datoResibido){
      console.log("Reportando desde el padre " +datoResibido.id)

    }
  },
  data(){
    return{
      pokemonArray:[],
      pokemonGanador:null,
      mostrarPokemon:false
    };
  }

}
</script>
  
<style scoped></style>