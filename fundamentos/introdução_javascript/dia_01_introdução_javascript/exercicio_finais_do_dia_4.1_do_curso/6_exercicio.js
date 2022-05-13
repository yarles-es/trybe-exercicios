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