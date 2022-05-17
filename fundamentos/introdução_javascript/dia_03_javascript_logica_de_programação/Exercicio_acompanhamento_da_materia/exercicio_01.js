
let fruits = [3, 4, 10, 1, 12];
let resultado = 0;
let valorAnterior = 0;
for (let contador = 0; contador < fruits.length; contador +=1){
    valorAnterior = resultado;
    resultado = resultado + fruits[contador];

if (resultado > 15){
    console.log(fruits[contador], '+', valorAnterior,'=', resultado);
} else {

    console.log('Valor menor que 16. Sendo: ',fruits[contador], '+', valorAnterior, '=', resultado);
} 
}
