const obtenerIdPokemon=()=> {
    const poke1=getRandomInt(600)
    const poke2=getRandomInt(600)
    const poke3=getRandomInt(600)
    const poke4=getRandomInt(600)
    console.log(poke1,poke2,poke3,poke4)
}

const obtenerNombresPokemon = (arreglo) => {
const name1= consumirAPI(arreglo[1]);
const name2= consumirAPI(arreglo[2]);
const name3= consumirAPI(arreglo[3]);
const name4= consumirAPI(arreglo[4]);
}

function consumirAPI(id){
    return nombre
}

//Se debe crear una funcion fachada
const obtenerIdPokemonFachada=()=>{
    obtenerIdPokemon()
}
const getRandomInt=(x)=>{
    return (Math.floor(Math.random()*x)+1)
}

export default obtenerIdPokemonFachada()