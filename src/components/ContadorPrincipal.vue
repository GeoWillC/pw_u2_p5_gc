<template>
  <div>
    //Titulo variable
    <h2>{{Titulo}}</h2>
    <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p>
    <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p>
    <p>{{ counter }} <sup>2</sup>={{ obtainSquareComputed }}</p>
  </div>
</template>

<script>

export default {
  props:['Titulo'],
  
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    obtainSquare() {
      console.log("Se calcula el cuadrado")
      return this.counter * this.counter;
    },
  },
  computed:{
    obtainSquareComputed(){
      console.log("Se calcula el cuadrado computado")
      return this.counter * this.counter;
    }
  }
};
</script>

<style>
</style>