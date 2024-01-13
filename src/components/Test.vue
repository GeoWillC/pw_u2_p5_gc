<<template>
    <!-- <img v-bind:src="valor" >
    <div id="container">
        <div id="interno">
            <button v-on:click="rand()">Dale click</button>
        </div>
        
    </div> -->
</template>
<script>
export default {
    // props: {
    //     fuente: {
    //         type: String,
    //     }
    // }
    
    data() {
        return {
            valor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        }
    },
    methods: {
        rand() {
            this.valor = this.fuente.default
        },
        presionandoTecla(event) {
            // Trigger your desired event here
            if (event.key === 'u') {
                console.log(event.key);
             
            }
        }
    },
    watch: {
        valor(oldValue, value) {
            console.log(this.oldValue)
            console.log(this.value)
        }
    }
}
</script>

<style scoped>
.container {
position: relative;
}
image{
    position: fixed;
}

</style>>