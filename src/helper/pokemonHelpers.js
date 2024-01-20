//Numeros aleatoreos

const obtenerIdPokemon = () => {
    const poke1 = getRandomInt(600)
    const poke2 = getRandomInt(600)
    const poke3 = getRandomInt(600)
    const poke4 = getRandomInt(600)
    const pokeArreglo=[poke1, poke2, poke3, poke4] 
    console.log(pokeArreglo)
    return pokeArreglo;   
}

const getRandomInt = (x) => {
    return (Math.floor(Math.random() * x) + 1)
}

//Api call
const obtenerPokemons=async ()=>{
    const arregloId = obtenerIdPokemon()
    await obtenerNombresPokemon(arregloId)
}

const obtenerNombresPokemon = async([p1,p2,p3,p4]) => {
    // const name1 = consultarNombre(arreglo[1]);
    // const name2 = consultarNombre(arreglo[2]);
    // const name3 = consultarNombre(arreglo[3]);
    // const name4 = consultarNombre(arreglo[4]);
    const nombre1 = await consultarNombre(p1);
    const nombre2 = await consultarNombre(p2);
    const nombre3 = await consultarNombre(p3);
    const nombre4 = await consultarNombre(p4);
      //creacion de objetos
  const pk1 = {
    id: p1,
    nombre: nombre1,
  }
  const pk2 = {
    id: p2,
    nombre: nombre2,
  }
  const pk3 = {
    id: p3,
    nombre: nombre3,
  }
  const pk4 = {
    id: p4,
    nombre: nombre4,
  }
  const arreglo = [pk1, pk2, pk3, pk4];
//   const arreglo = [nombre1, nombre2, nombre3, nombre4];
  
  console.log(arreglo);
  return arreglo;
}

async function consultarNombre(id) {
    const data=await consumirAPI(id);
    return data.name;
}

const consumirAPI = async (id) => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
    
}

//Se debe crear una funcion fachada
const obtenerIdPokemonFachada = async() => {
    await obtenerPokemons()
}
export default obtenerIdPokemonFachada()