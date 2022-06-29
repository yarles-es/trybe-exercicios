// {
// // exemplo 01;
// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6, ...numbers];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]
// }

// {
// // exemplo 02;
// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */
// }

// {
// // exemplo 03;
// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [85, 1.88];

// console.log(imc(...patientInfo)); // 20.76
// }

// {
// // exemplo 04;
// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5
// }

// {
// // exemplo 05;
// const people = {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//   };
  
//   const about = {
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer',
//   };
  
//   const customer = { ...people, ...about };
//   console.log(customer); /* {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer'
//   } */
// }

//exercicio de fixação;
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'pera', 'pitaya'];
const fruta = ['limão', 'abacate']
// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['kiwi', 'morango', 'manga', ...fruta];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional,]
};

console.log(fruitSalad(specialFruit, additionalItens));