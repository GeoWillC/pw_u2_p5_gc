<template>
  <h2>//Titulo {{ Titulo }}</h2>
  <p>{{ counter }}<sup>2</sup>= {{ obtainSquareComputed }}</p>
  <!-- <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p>
    <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p>
    <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p> -->
  <button @click="sumar">+1</button>
  <button @click="restar">-1</button>
</template>

<script>
export default {
  //Forma uno de declarar un props
  //props: ["Titulo", "valor"],
  //Forma dos de declarar un props
  props: {
    Titulo: String,
    //valor: Number,
    valor: {
      type: Number,
      requiered: true,
      default: 141,
      validator(value) {
        //true validacion exitosa
        if (value > 0) {
          console.log("ERROR!!!!!!!!!!!!!!!!");
        }
        //false validacion incorrecta

        return value < 0;
      },
    },
    //Forma tres de declarar un props
  },

  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtainSquare() {
      console.log("Se calcula el cuadrado");
      return this.counter * this.counter;
    },
    sumar() {
      //this.counter++ || this.counter-- modifica el valor original
      //this.counter=this.counter+1 retorna el valor incrementado
      this.counter++;
    },
    restar() {
      this.counter--;
    },
  },
  computed: {
    obtainSquareComputed() {
      console.log("Se calcula el cuadrado computado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style scoped>
  button{
    background-color: #64b687 ;
    border-radius: 5px;
    border: 1px solid black;
    color:white;
    cursor: pointer;
    margin:0px 5px;
  }

  button:hover{
  background-color: #1d6e40;
  }
   p{
    text-align: center;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }
   h2{
    text-align: center;
    color: rgb(121, 0, 0);
   }

</style>