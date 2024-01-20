<template>
    <img :src="nombreSrc" alt="No se ve xD" class="ocultar">
    <img :src="nombreSrc" alt="No se ve xD" v-if="showPokemon">
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
            name: null
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
.pokemon-container {
    height: 200px;
    /* width: 400px; */
}

.ocultar {
    filter: brightness(0);
}

img {
    height: 200px;
    position: absolute;
    /*Aqui se monta la imagen encima de tu otra imagen */
    right: 44%;
}
</style>