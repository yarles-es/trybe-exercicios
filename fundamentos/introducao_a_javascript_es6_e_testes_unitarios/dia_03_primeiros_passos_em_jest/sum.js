//exercicio 01;
const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parametro não é um numero!");
  }

  return a + b;
};
//exercicio 02;
const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

//exerciocio 03;
function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
};

function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
  };

  function decode(string){
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
  };

  const techList = (array, string) => {
    let objectReturn=[];
    if (array.length == 0){
      return 'Vazio!';
    }else{
    for(index =0; index < array.length ; index +=1){
     objectReturn.push({tech: array[index], name: string})
    }
    objectReturn.sort((a, b) => {
    
      return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
     
    });
  }
    return objectReturn;
  }

  const hydrate = (text) => {
    let numberIsText = text.replace(/[^0-9]/g, '');
    let numeros =(numberIsText);
    let soma = 0;
    for(index = 0; index < numeros.length; index +=1){
      
      soma +=  parseInt(numeros[index]);
    };
    let retorno = (soma == 1  || soma === 0? soma + ' copo de água': soma + ' copos de água');
    return retorno;
  }
  console.log(hydrate('1 cachaça, 5 cervejas, 1 copo de vinho e 9 refri'));

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};

