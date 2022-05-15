/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const n1 = 90
const n2 = 40
const n3 = 60

if (n1 > n2 && n1 >n3) {
    console.log("maior numero é " + n1);
}else if (n2 > n1 && n2 > n3) {
    console.log("maior Numero é " + n2);
}else if (n3 > n1 && n3 > n2) {
    console.log("maior Numero é " + n3);
}