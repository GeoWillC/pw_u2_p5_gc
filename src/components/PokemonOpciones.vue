<template>
    <div class="option-container"></div>
    <ul>
        <li v-on:click="$emit('seleciono', { id: pokemon.id, nom: 'pepito', edad: pokemon.id, hobby: pokemon.nombre })"
            v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
</template>
<script>

export default {
    props: {
        pokemons: {
            type: Array,
            requeried: true
        }
    },
    data() {
        return {

        }
    },
    method: {

    },

}
</script>

<style scoped>
ul {
    list-style-type: none;
    align-items: center;
}

li {
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgb(204, 200, 200);
    width: 120px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

li:hover {
    background-color: rgb(0, 0, 0, 0.1);
}

.option-container {
    display: flex;
    justify-content: center;
}
</style>