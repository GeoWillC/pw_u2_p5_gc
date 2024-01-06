<template>
    <div class="container">
        <div class="calculadora">
            <div id="respuesta" class="display">{{ resultado }}</div>
            <button class="operador" @click="limpiar()">C</button>
            <button class="operador" @click="borrar()">&larr;</button>
            <button class="operador" @click="agregarValor('%')">&#x0025;</button>
            <button class="numero" @click="agregarValor('7')">7</button>
            <button class="numero" @click="agregarValor('8')">8</button>
            <button class="numero" @click="agregarValor('9')">9</button>
            <button class="operador" @click="agregarValor('x')">X</button>
            <button class="numero" @click="agregarValor('4')">4</button>
            <button class="numero" @click="agregarValor('5')">5</button>
            <button class="numero" @click="agregarValor('6')">6</button>
            <button class="operador" @click="agregarValor('-')">&#x002D;</button>
            <button class="numero" @click="agregarValor('1')">1</button>
            <button class="numero" @click="agregarValor('2')">2</button>
            <button class="numero" @click="agregarValor('3')">3</button>
            <button class="operador" @click="agregarValor('+')">&#x002B;</button>
            <button class="numero" @click="agregarValor('0')">0</button>
            <button class="operador" @click="agregarValor('.')">&#x002E;</button>
            <button class="operador" @click="operar()">&#x003D;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        valor: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            resultado: this.valor,
            separacion: "",
            total: 0,
            operador: ""
        }
    },
    methods: {
        limpiar() {
            this.resultado = ""
            console.log(this.resultado)
        },
        borrar() {
            this.resultado = this.resultado.slice(0, -1)
        },
        respuestas() {
            console.log(valoresTexto)

        }, agregarValor(value) {
            this.resultado += value
            console.log(this.resultado)
            console.log(typeof (this.resultado))
        },
        operar() {
            this.operacion()
            if (this.operador === "sum") {
                console.log('Suma')
                this.separacion = this.resultado.split('+')
                console.log('Suma')
                for (const valor of this.separacion) {
                    this.total += parseFloat(valor)
                    console.log(this.total)
                }
                console.log(this.separacion)
                this.resultado = this.total
                this.total = 0
            }
            if (this.operador === "res") {
                console.log('Resta')
                this.separacion = this.resultado.split('-')
                this.total = this.separacion[0]
                for (var i = 1; i < this.separacion.length; i++) {
                    this.total -= parseFloat(this.separacion[i])
                    console.log(this.total)
                }
                console.log(this.separacion)
                this.resultado = this.total
                this.total = 0
            }
            if (this.operador === "mul") {
                console.log('Multiplicacion')
                this.separacion = this.resultado.split('x')
                this.total = 1
                for (const valor of this.separacion) {
                    this.total *= parseFloat(valor)
                    console.log(this.total)
                }
                console.log(this.separacion)
                this.resultado = this.total
                this.total = 0
            }
            if (this.operador === "div") {
                console.log('Multiplicacion')
                this.separacion = this.resultado.split('%')
                this.total = this.separacion[0]
                for (var i = 1; i < this.separacion.length; i++) {
                    this.total /= parseFloat(this.separacion[i])
                    console.log(this.total)
                }
                console.log(this.separacion)
                this.resultado = this.total
                this.total = 0
            }
            else {
                console.log('Nada')
            }
        },
        operacion() {
            if (this.resultado.includes("+")) {
                this.operador = "sum"
                console.log(this.operador)
            }
            if (this.resultado.includes("-")) {
                this.operador = "res"
            }
            if (this.resultado.includes("x")) {
                this.operador = "mul"
            }
            if (this.resultado.includes("%")) {
                this.operador = "div"
            }
        }
    }
}


</script>

<style scoped>
.container {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
}

.calculadora {
    display: grid;
    /* grid-template-columns: 75px 75px 75px 75px; */
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: repeat(6, 55px);
    font-size: medium;
    background: #00916e;
    padding: 15px;
    border-radius: 32px;
    box-shadow: 15px 10px 5px 5px #000;
}

.display {
    grid-column: span 4;
    padding: 5%;
    padding-bottom: 10%;
    margin: 10px 10px;
    background: #ffeeee;
    border-radius: 32px;
    text-align: right;
    box-shadow: 0px 0px 0px 2px #a02525;
    padding: auto;
}

button {
    margin: 5px;
    padding: 0;
    border-radius: 100%;
    border: none;
    background-color: #15f0bd;
    box-shadow: 5px 5px 5px 2px #000;
}



.numero:hover {
    background-color: #1ebe4e;
}

.operador:hover {
    background-color: #b82020;
}


</style>