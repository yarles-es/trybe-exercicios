const criaHtml = (array) => {
    const arrayfiltrado =  array.filter((array) => array[1].length > 0);
    const divPrincipal = document.querySelector('#div-principal');
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');

    img.src = arrayfiltrado[1];
    h1.innerHTML = arrayfiltrado[0];
    div.className = 'pokemon';
    div.appendChild(img);
    div.appendChild(h1);
    divPrincipal.appendChild(div);
}

const criaObjeto = async (url) =>{
    const link = await fetch(url)
    .then((response) => response.json())
    .then(({name, sprites: {front_default}}) => [name, front_default,]);
    criaHtml(link)
}

const adicionaPokemonEmObjParaUso = async () => {
    const arrayUrl = await SeparadorUrlENomesPokemons();
    const urlImgEName = arrayUrl.forEach((url) =>  criaObjeto(url));
} 

const SeparadorUrlENomesPokemons = async () => {
    const array =[];
    const arrayDeObjectPokemons = await buscarArrayTodospokemons();
    arrayDeObjectPokemons.forEach((Pokemon) => array.push(Pokemon.url));
    return array;
}

const buscarArrayTodospokemons = async () => {
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
const pokemonsArray = await fetch(url)
.then((response) => response.json())
.then((object) => object.results);
return pokemonsArray;
}

adicionaPokemonEmObjParaUso();