function indiceDoMaior(numero){
    let maiorIndice = 0
    for(let indice in numero){
       if (numero[maiorIndice] < numero[indice]){
           maiorIndice = indice;
       }
    }
    return maiorIndice;

} console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

