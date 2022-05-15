/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. */

const n1 = 4;
const n2 = 10;
const n3 = 12;

if (n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1 ) {
    console.log("True");
}else {
    console.log("False");
}