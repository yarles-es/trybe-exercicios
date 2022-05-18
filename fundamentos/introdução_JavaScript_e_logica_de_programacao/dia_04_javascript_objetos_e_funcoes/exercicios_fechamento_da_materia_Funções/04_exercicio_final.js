function quantidadesCaracteres (array){
let maiorCaractere = array[0];
for (let index = 0; index < array.length; index +=1)

if (maiorCaractere.length < array[index].length){
    maiorCaractere = array[index];
    }
    return maiorCaractere;
}

console.log(quantidadesCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));