<template>
  <div>
    <label id="ingreso" for="codigo">Ingrese un numero y presione enter</label>
    <input @keypress.enter="procesado()" v-model="pid" id="codigo" type="text">
    <br>
    <label for="codigo">Name:</label>
    <input v-model="uno" type="text">
    <br>
    <label for="codigo">Height:</label>
    <input v-model="dos" type="text">
    <br>
    <label for="codigo">Weight: </label>
    <input v-model="tres" type="text">
    <br>
    <label for="codigo">Base experience:</label>
    <input v-model="cuatro" type="text">

  </div>
</template>

<script>
export default {
  data() {
    return {
      pid: null,
      info: null,
      uno: null,
      dos: null,
      tres: null,
      cuatro: null
    }
  },
  methods: {
    procesado() {
      this.consumidorAPI();
    }
    ,
    urlBuilder() {
      return 'https://pokeapi.co/api/v2/pokemon/' + this.pid
    },
    async consumidorAPI() {
      const { name, height, weight, base_experience } = await fetch(this.urlBuilder()).then(r => r.json());
      //this.info = valor
      var nombre=name
      this.uno = nombre
      this.dos = height
      this.tres = weight
      this.cuatro = base_experience
      
    }
  },
  watch: {
  pid(value, oldValue) {
       this.procesado()
       console.log(value)
       console.log(oldValue)
     }
   }

}
</script>

<style scoped>

#ingreso{
  text-align: center;
} 
 *{
  background-color: #3B4CCA;
  font-size: 50px;
  
 }
 label{
  color: antiquewhite;
 }
</style>