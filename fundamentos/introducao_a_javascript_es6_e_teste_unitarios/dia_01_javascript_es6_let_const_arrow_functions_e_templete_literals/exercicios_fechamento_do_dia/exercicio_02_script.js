const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(oddsAndEvens.sort())
let numerosCrecentes = oddsAndEvens.sort((a,b) => {return a - b});

console.log(`Os numeros ${numerosCrecentes} se encontram ordenados de forma crescente!`);