// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function Menorvalor (array){
let indiceMenor = 0;

for (let indice =0; indice < array.length; indice +=1){
    if (array[indiceMenor] > array[indice]){
        indiceMenor = indice;
    }
}
return indiceMenor
}

console.log(Menorvalor([2, 4, 6, 7, 10, 0, -3, 15, -10, 5])); 