const stringTexto = 'trybe x aqui!'
const palavra = 'Yarles'
const habilidades = ['JavaScript', 'html', 'CSS'];
const HabilidadesTexto = 'Minhas três principais habilidades são:'

const mudarCaractere = (string, palavra) => {
    array = string.split('');
 for (let index =0; index < string.length; index += 1) {
    if (array[index] === 'x') {
        array[index] = palavra;
    }
 }
 texto = array.join('');
 return texto;
}

const novaString = (arrayHabilidades, habilitadesTexto) => {
    const texto = mudarCaractere(stringTexto, palavra);
    const Habilidades = arrayHabilidades;
    return `
${texto}
${habilitadesTexto}
--> ${habilidades[0]}
--> ${habilidades[1]}
--> ${habilidades[2]}`
    
}
console.log(novaString(habilidades, HabilidadesTexto));



