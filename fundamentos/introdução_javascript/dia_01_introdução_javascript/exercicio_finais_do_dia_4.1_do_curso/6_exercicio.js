/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */


let peca = "pe".toLowerCase();

switch (peca) {
    case "cavalo":
        console.log("A peça cavalo anda em L");
        break;
    case "peão":
        console.log("A peça Apenas se movimenta para frente");
        break;
    case "rainha":
        console.log("A peça se movimenta para qualquer direção");
        break;
    case "bispo":
        console.log("A peça se movimenta apenas em diagonais");
        break;
    case "torre":
        console.log("A peça se movimenta em linha reta");
        break;
    default:
        console.log("peça invalida");
        break;
}