/* 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

let angulo1 = 60;
let angulo2 = 30;
let angulo3 = 90;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let todosAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (todosAngulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log("é um triangulo");
    }else {
        console.log("Não é um triangulo");
    }
}else {
    console.log("erro, valor invalido");
}