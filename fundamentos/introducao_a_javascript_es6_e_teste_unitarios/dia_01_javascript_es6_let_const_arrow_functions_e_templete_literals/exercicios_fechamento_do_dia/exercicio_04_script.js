const longestWord ='Antônio foi no banheiro e não sabemos o que aconteceu alguma coisa';

const SepararPalavras = string =>{
    array = string.split(' ');
    return array;
}
const maiorPalavra = array2 =>{
    let palavras = SepararPalavras(array2);
    let maiorPalavra = [];
    for (let index = 0; index < palavras.length; index += 1){
        if(palavras[index].length > maiorPalavra.length ){
            maiorPalavra = palavras[index];
        }
    }
    console.log(`A maior palavra da frase é: "${maiorPalavra}"`);
}
maiorPalavra(longestWord);
