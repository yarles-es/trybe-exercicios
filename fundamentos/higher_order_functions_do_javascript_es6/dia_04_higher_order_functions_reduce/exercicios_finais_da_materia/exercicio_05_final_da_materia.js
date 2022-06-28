const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
   let numeroDeA = 0;
   let numeroDea = 0;
    const nomes = names.reduce((acumulador, nome) => {
    acumulador.push(...nome);
    return acumulador;
   },[] );
   nomes.forEach((n) => {
    if(n === 'A') numeroDeA +=1;
    if(n ==='a') numeroDea +=1;
   })
   return `
   Numero de 'A' é: ${numeroDeA}.
   Numero de 'a' é: ${numeroDea}.
   Quantidade de A e a presente são: ${numeroDeA + numeroDea}.`
  }
  console.log(containsA());