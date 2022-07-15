const criaHtml = (name, fotoTop, fotoBasica) => {
    let fotoatual = fotoTop
    if(fotoatual === null)  fotoatual = fotoBasica;
    if(fotoatual !== null  && fotoatual !== undefined){
        const divPrincipal = document.querySelector('#div-principal');
    
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');

        img.src = fotoatual;
        h1.innerHTML = name;
        div.className = 'pokemon';
        div.appendChild(img);
        div.appendChild(h1);
        divPrincipal.appendChild(div);
    }
}

const criaObjeto = async (url) =>{
    await fetch(url)
    .then((response) => response.json())
    .then(({name, sprites:{front_default ,other: {dream_world: {front_default: fotoTop}}}}) => criaHtml(name,fotoTop, front_default));
}

const SeparadorUrlENomesPokemons = async () => {
    const arrayDeObjectPokemons = await buscarArrayTodospokemons();
    arrayDeObjectPokemons.forEach((Pokemon) => criaObjeto(Pokemon.url));
}

const buscarArrayTodospokemons = async () => {
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const pokemonsArray = await fetch(url)
.then((response) => response.json())
.then((object) => object.results);
return pokemonsArray;
}

SeparadorUrlENomesPokemons();