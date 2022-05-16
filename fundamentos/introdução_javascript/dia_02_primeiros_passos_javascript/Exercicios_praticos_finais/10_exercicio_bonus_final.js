let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let contador = 1; contador < number.length; contador += 1) {
    
    for (let contador2 = 0; contador2 < contador; contador2 += 1) {
      if (number[contador] < number[contador2]) {
        
        let position = number[contador];
        
        number[contador]= number[contador2];
        
        number[contador2] = position;
      }
    }
  }
  console.log (number)