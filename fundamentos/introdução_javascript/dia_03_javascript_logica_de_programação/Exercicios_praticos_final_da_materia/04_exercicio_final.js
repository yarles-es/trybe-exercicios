let array = ['java', 'javascript', 'python', 'html','paralelepipedo', 'css'];
let resultado = array [0];

for(let contador = 0; contador < array.length; contador +=1) {
    if (array[contador].length < resultado.length) {
        resultado = array[contador];
    }
}
console.log(resultado);