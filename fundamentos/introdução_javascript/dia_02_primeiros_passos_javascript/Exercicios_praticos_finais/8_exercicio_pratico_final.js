/* Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

let numbers = [];
for (let contador = 1; contador <=25; contador += 1){
    numbers.push(contador);
}
console.log(numbers);

for (let sequencia of numbers) {
    console.log(sequencia);
}

