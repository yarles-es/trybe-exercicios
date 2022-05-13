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