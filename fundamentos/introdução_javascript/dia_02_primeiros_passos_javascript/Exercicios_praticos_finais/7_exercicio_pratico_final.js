/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorNumero = numbers[0];
for (contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] < menorNumero) {
        menorNumero =  numbers[contador];
    } 
    }
    console.log('menor numero é: ', menorNumero);