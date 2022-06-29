{
// exemplo 01, tentar acessar uma propriedade que não existe irá retornar undefined;
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;
  console.log(nationality)
}

{
// exemplo 02, adicionar uma propriedade não existente e colocar um valor a ela;
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian
}

{
// exemplo 03, adicionar uma propriedade não existente em um array com o mesmo modelo de aplicação;
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
}

// exercicio de fixação;
// 1 - Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// adicionado o valor 'Brazilian' ja fixado no parametro da função, caso um objecto especificado n tenha tal parametro, a função ira implementar esse parametro para esse objeto;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));