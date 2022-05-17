let fatorialNum = 10;
let resultadoFatorial = 1;
for (let contador = 0; contador < fatorialNum -1; contador +=1) {
resultadoFatorial *= (fatorialNum - contador);
    console.log(resultadoFatorial);
}