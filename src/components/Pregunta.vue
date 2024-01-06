<template>
  
  <img
    src="https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif"
    alt="No pudo renderizar"
  />

  <div class="dark"></div>
  <h1>Pregunta del futuro</h1>
  <!-- <h2>{{question}}</h2> -->
  <div class="container">


    <input type="text" v-model="question" v>
    <p>Recuerda que debes terminar con el signo de interrogración</p>
    <h2>{{ question }}</h2>
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
      question: "Voy a pasar el semestre ?",
    };
  },
  watch:{
    // El nombre del observador debe ser el mismo del nombre de la propiedad reactiva
    //Valor actual y el anterior
    question(value, oldValue){
        console.log(value)
        console.log(oldValue)
        
        if(!value.includes("?")) return;
        //Consumo del API
        this.consumidorAPI();

    }   
  },    
  methods:{
    //Si uso await debo agregar el async que indica que procesa de manera acincrona
    async consumidorAPI(){
        //Agrument in url api
        //await para que la api procese informacion
        const { answer, img} = await fetch('https://yesno.wtf/api').then(r=>r.json());
        console.log(answer);
        console.log(img);
    }
  }
};
</script>

<style scoped>
.dark,img {
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
.dark{
    /* Ultimo digito es la opacidad */
    background-color: rgb(0, 0, 0, 0.5);
}

input{
    width: 250px;
    padding: 10px 15px ;
    border-radius: 5px ;
    border: none;
}
input:focus{
    outline: none;
}


.container{
    
    position: relative;
}
p{
    color: white;
    font-size: 20px;
    margin-top : 0px;

}
h1,h2{
    color: white;
}
h2{
    margin-top: 130px;
}

</style>