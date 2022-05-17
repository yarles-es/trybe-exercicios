let word = 'tryber';
let aoContrario = '';

for (let contador = 0; contador < word.length; contador +=1) {
        
        aoContrario =  aoContrario + word[word.length - 1 - contador];
}
console.log(aoContrario);