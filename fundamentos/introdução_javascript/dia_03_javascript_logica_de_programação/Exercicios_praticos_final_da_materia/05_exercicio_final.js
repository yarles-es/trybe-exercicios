let maiorPrimo = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
    let primo = true;
  for (let atualDivisor = 2; atualDivisor < numeroAtual; atualDivisor += 1) {
    if (numeroAtual % atualDivisor === 0) {
        primo = false 
    }
  }
  if (primo) {
    maiorPrimo = numeroAtual;
  }
}

console.log(maiorPrimo);