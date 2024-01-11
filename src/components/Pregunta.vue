<template>
  <img v-if="imgUrl" v-bind:src="imgUrl" alt="No pudo renderizar" />
  <div class="dark"></div>
  <h1>Pregunta del futuro</h1>
  <!-- <h2>{{question}}</h2> -->
  <div class="container">

    <input type="text" v-model="question" v>
    <p>Recuerda que debes terminar con el signo de interrogración</p>
    <div v-if="preguntaValida != false">
      <h1>{{ question }}</h1>
      <h2>{{ respuesta }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     pregunta: {
  //       type: String,
  //       default: ,
  //     },
  //   },
  data() {
    return {
      question: null,
      respuesta: null,
      imgUrl: null,
      //flag
      preguntaValida: false
    };
  },
  watch: {
    // El nombre del observador debe ser el mismo del nombre de la propiedad reactiva
    //Valor actual y el anterior
    question(value, oldValue) {
      this.preguntaValida = false
      console.log(value)
      console.log(oldValue)

      if (!value.includes("?")) return;
      //Consumo del API
      this.consumidorAPI();
      this.preguntaValida = true

    }
  },
  methods: {
    //Si uso await debo agregar el async que indica que procesa de manera acincrona
    async consumidorAPI() {
      this.respuesta = "procesando"
      this.respuesta = "procesando."

      //Agrument in url api
      //await para que la api procese informacion
      const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json());
      console.log(answer);
      console.log(image);
      this.respuesta = "procesando.."
      this.respuesta = "procesando..."



      this.respuesta = answer==='yes'? 'SI!':'NO!';
      this.imgUrl = image;

    },
    urlBuilder(id){
      return "https://pokeapi.co/api/v2/pokemon"
    }
  }
};
</script>

<style scoped>
.dark,
img {
  /* 100% del alto de la pagina web */
  height: 100vh;
  /* 100% del ancho de la pagina web */
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  /* Empiece desde el origen del contenedor */
  top: 0px;
  left: 0px;
}

.dark {
  /* Ultimo digito es la opacidad */
  background-color: rgb(0, 0, 0, 0.5);
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

input:focus {
  outline: none;
}


.container {

  position: relative;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;

}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 130px;
}
</style>