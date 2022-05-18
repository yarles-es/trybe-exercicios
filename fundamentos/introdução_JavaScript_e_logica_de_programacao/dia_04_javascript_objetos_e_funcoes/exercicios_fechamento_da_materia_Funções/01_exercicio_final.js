//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let palavra = 'arara';
function verificapalindrome (palavra){
for (let contador in palavra){
    if( palavra[contador] != palavra[(palavra.length - 1) - contador]){
        return false;
    }else{}
}
return true;
}

console.log(verificapalindrome ('arara'));
console.log(verificapalindrome('desenvolvimento'));