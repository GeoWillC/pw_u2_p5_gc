<template>
  <h1 v-if="pokemonGanador === null">Espere porfavor estamos cargando la información</h1>
  <div v-if="pokemonGanador !== null">
    <h1>Adivina el pokemon</h1>
    <p>Puntaje: {{ puntaje }}</p>
    <p>Intentos: {{ intentos }}</p>
    <PokemonOpciones v-on:seleciono="revisarClick($event)" :pokemons="pokemonArray" />
    <PokemonImage :pokemonId="pokemonGanador.id" :showPokemon="mostrarPokemon"></PokemonImage>
  </div>
  <div class="perdida" v-if="mostrarPerdedor">
    <p>Has utilizado todos tus 3 intentos</p>
    <p> El juego ha terminado, intentalo nuevamente</p>
    <button v-on:click="reiniciar()"> Nuevo Juego </button>
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
  beforeMount() {
    //Cuando el componente esta creado y listo para montar el componente
    console.log("Antes de que se monte el componente")
  },
  beforeUpdate() {
    console.log("Antes de que se actualice el componente")
  },
  beforeDestroy() {
    //Ejecutar algo antes de que se destruya
    console.log("Antes de que se destruya")
  },
  destroyed() {
    consoles.log("Destruido")
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await obtenerIdPokemonFachada();
      console.log("Usando el componente de arreglos");
      console.log(arrayPokemons)
      this.pokemonArray = arrayPokemons
      console.log("Arreglo de pkemon" + this.pokemonArray);
      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonArray[indiceGanador];
      console.log(this.pokemonGanador)
    },
    revisarClick(datoResibido) {
      console.log("Reportando desde el padre " + datoResibido.id)
      
      if (datoResibido.id === this.pokemonGanador.id && this.intentos < 3) {
        this.mostrarPokemon = true
        this.puntaje += 1
        setTimeout(() => {
          this.pokemonGanador = null
          this.mostrarPokemon = false
          this.intentos = 1;
          this.construirLoad();
        }, 2000);
      }else if(this.intentos >= 3) {
        this.mostrarPokemon = true
        this.mostrarPerdedor = true
        this.pokemonGanador = null
        console.log(this.mostrarPokemon)
      }
      this.intentos += 1
    },
    reiniciar() {
      this.intentos = 1;
      this.puntaje = 0
      this.mostrarPokemon = false
      this.mostrarPerdedor = false
      this.construirLoad();
    }
  },
  data() {
    return {
      puntaje: 0,
      intentos: 1,
      pokemonArray: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      mostrarPerdedor: false,
    };
  }

}
</script>
  
<style scoped>
.perdida{
  color: rgb(240, 6, 6);
}
</style>