/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] % 2 === 1){
        impares += 1;
    }
}
if (impares > 0) {
    console.log('encontrou-se ', impares, 'numeros impares.');
}else{
    console.log('Nenhum valor ímpar encontrado.');
}