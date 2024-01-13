<template>
    <div class="pokemon-container"></div>
    <img :src="nombreSrc" alt="No se ve xD" class="ocultar">
    <img :src="nombreSrc" alt="No se ve xD" v-if="true">
</template>
<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            requiered: true,
        },
        showPokemon: {
            type: Boolean,
            requiered: true,
            default: false
        }

    },
    data() {
        return {
            name:null
        }
    },
    methods: {

    },

    computed: {
        nombreSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.pokemonId + ".svg"
        }
    }
}
</script>

<style>
.ocultar {
    filter: brightness(0);
    position: absolute;
}

.pokemon container {
    height: 200px;
}
</style>