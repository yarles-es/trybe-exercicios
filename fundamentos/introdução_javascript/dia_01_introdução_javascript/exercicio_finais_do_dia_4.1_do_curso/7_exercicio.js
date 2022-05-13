let porcentagem = -1;

if (porcentagem >=90 && porcentagem <=100) {
    console.log("Sua nota foi A");

} else if (porcentagem >=  80 && porcentagem < 90) {
    console.log("Sua nota foi B");
}else if (porcentagem >= 70 && porcentagem < 80) {
    console.log("Sua nota foi C");
}else if (porcentagem >= 60 && porcentagem < 70) {
    console.log("Sua nota foi D");
}else if (porcentagem >= 50 && porcentagem < 60 ) {
    console.log("Sua nota foi E");
}else if (porcentagem < 50 && porcentagem >= 0) {
    console.log("sua nota foi F")
}else if (porcentagem < 0 || porcentagem > 100) {
    console.log("valor da Nota invalido")
}
