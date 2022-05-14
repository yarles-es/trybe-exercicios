/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

let numbers = [];
for (let contador = 1; contador <=25; contador += 1){
    numbers.push(contador);
}
console.log(numbers);

for (let divisor of numbers) {
   divisor = divisor /2;
   console.log(divisor);
}
