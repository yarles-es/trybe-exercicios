// {
// // exemplo 01;
// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   const { name,seller } = product;
//   console.log(name, seller);
// }

// {
// // exemplo 02, object dentro de object;
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
// }

// {
// // exemplo 03, extraindo chaves com desestruturação de objetos;

// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
  
// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']
  
// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }

// {
// // exemplo 04, reatribuir nome de propriedade que deseja acessar ao reclará-la como uma variavel;
// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };
  
//   const { a: name, b: classAssigned, c: subject } = student;
  
//   console.log(name); // Maria
//   console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática
// }

// {
// // exemplo 05, usando desestruturação de objetos para passar valor de objeto como parametro para função;
// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };
  
//   const printProductDetails = ({ name, price, seller }) => {
//     console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
//   };
  
//   printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
// }


// exercicio para fixação;
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
const InfoUsuario = {...user, ...jobInfos };

//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const { name, age, nationality, profession, squad, squadInitials} = InfoUsuario;

const frase = `Hi my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`

console.log(frase);