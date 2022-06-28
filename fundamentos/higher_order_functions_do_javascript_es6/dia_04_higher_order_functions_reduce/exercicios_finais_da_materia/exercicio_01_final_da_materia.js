const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
    ['yarles', 'de', 'andrade'],
  ];
  
  function flatten() {
   return arrays.reduce((acumulador, array) => acumulador = [...acumulador, ...array])
  }
  console.log(flatten());