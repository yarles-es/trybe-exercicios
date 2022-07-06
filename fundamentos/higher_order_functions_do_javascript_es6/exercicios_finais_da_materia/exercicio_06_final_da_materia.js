const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// const toObject = ([modelo, marca, ano]) => ({modelo, marca, ano});
// console.log(toObject(palio));

const toObjects = (...cars) => {
 return cars.reduce((acc, [modelo, marca, ano]) => {
    acc.push({modelo, marca, ano });
    return acc;
 },[]);
};
console.log(toObjects(palio, shelbyCobra, chiron));