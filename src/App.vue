<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Estilo de h2</h2>
    <Contador Titulo="Contador1" :valor="10" />
    <Contador Titulo="Contador2" :valor="calculo()" />
    <Contador Titulo="Contador3" /> -->
  <!-- <Calculadora></Calculadora> -->
  <!-- <Pregunta></Pregunta> -->
  <!-- <Pokemon></Pokemon> -->
  <!-- <Test></Test> -->
  <!-- <Page></Page> -->
  <div class="inicio" v-if="mostrarInicio">
    <h1>Casino Pokemon</h1>
    <label for="">Puntaje: {{ puntaje }}</label>
    <label for="">Intentos: {{ intento }}</label>
    <div class="imagenes">
      <Imagen :texto="texto1" :urlImg="urls[0]" />
      <Imagen :texto="texto2" :urlImg="urls[1]" />
      <Imagen :texto="texto3" :urlImg="urls[2]" />
    </div>

    <button v-on:click="jugar()">Jugar</button>
  </div>
  <div class="perdedor" v-if="mostrarPerdedor">
    <p>Has utilizado todos tus {{ intento }} intentos</p>
    <p> El juego ha terminado, intentalo nuevamente</p>
    <button v-on:click="reiniciar()"> Nuevo Juego </button>
  </div>
  <div class="ganador" v-if="mostrarGanador">
    <p>Puntaje: {{ puntaje }} </p>
    <p> Felicidades has ganado un premio de $10000</p>
    <button v-on:click="reiniciar()"> Nuevo Juego </button>
  </div>
</template>

<script>
// import Contador from "./components/ContadorPrincipal.vue";
// import Calculadora from "./components/Calculadora.vue";
// import Pregunta from "./components/Pregunta.vue";
// import Pokemon from "./components/Pokemon.vue";
//import Test from "./components/Test.vue"
// import Page from "./pages/PokemonPage.vue"
import Imagen from "./components/Imagen.vue"

export default {
  name: "App",
  components: {
    // Contador,
    // Calculadora,
    // Pregunta,
    // Pokemon,
    // Page,
    Imagen
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      urls: ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
      ],
      texto1: "xxxxxxxxxxxxxx",
      texto2: "xxxxxxxxxxxxxx",
      texto3: "xxxxxxxxxxxxxx",
      mostrarGanador: false,
      mostrarPerdedor: false,
      mostrarInicio: true
    }
  }
  ,
  methods: {
    calculo() {
      return 5 + 5 * 10;
    },
    async jugar() {
      const dato1 = await this.consumirAPI()
      const dato2 = await this.consumirAPI()
      const dato3 = await this.consumirAPI()
      this.texto1 = dato1.answer
      this.texto2 = dato2.answer
      this.texto3 = dato3.answer
      this.urls[0] = dato1.image
      this.urls[1] = dato2.image
      this.urls[2] = dato3.image
      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then(r => r.json())
    },
    evaluarResultado() {
      this.intento += 1
      if (this.texto1 === "yes" && this.texto2 === "yes" && this.texto2 === "yes") {
        this.puntaje = this.puntaje + 5
      } else if ((this.texto1 === "yes" && this.texto2 === "yes") || (this.texto1 === "yes" && this.texto3 === "yes") || (this.texto2 === "yes" && this.texto3 === "yes")) {
        this.puntaje = this.puntaje + 2
      } else if (this.texto1 === "yes" || this.texto2 === "yes" || this.texto3 === "yes") {
        this.puntaje = this.puntaje + 1
      }
      if (this.puntaje >= 10) {
        this.mostrarInicio = false
        this.mostrarGanador = true
      }
      if (this.intento === 5) {
        this.mostrarInicio = false
        this.mostrarPerdedor = true
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.urls = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
      ];
      this.texto1 = "xxxxxxxxxxxxxx";
      this.texto2 = "xxxxxxxxxxxxxx";
      this.texto3 = "xxxxxxxxxxxxxx";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarInicio = true
    }
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
.imagenes{
  display: flex;
}
.inicio{
  color: black;
}
.perdedor{
  color: crimson;
}
.ganador{
  color: blue;
}
.inicio label{
  margin-left: 10%;
  margin-right: 80px;
}
</style>
