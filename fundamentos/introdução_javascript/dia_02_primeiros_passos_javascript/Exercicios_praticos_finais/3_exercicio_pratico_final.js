/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let mediaAritmetica = 0;
for (let contador = 0; contador < numbers.length; contador += 1) {
total = total + numbers[contador];
}
mediaAritmetica = total / numbers.length;
console.log('A soma dos todas Arrays é:', total);
console.log('Média Aritmétrica dos valores é: ' ,mediaAritmetica);
