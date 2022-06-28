var str = "How can mirrors be real if our eyes aren't real";

// const string = str.split(' ').map((palavra) => {
//     return palavra[0].toUpperCase() + palavra.substring(1);
// }).join(' ');
// console.log(string);


// const colocarM = () => {
//   const string = str.split(" ");
//   for (i = 0; i < string.length; i += 1) {
//     string[i] = string[i][0].toUpperCase() + string[i].substring(1);
//   }
//   return string.join(' ');
// };

// console.log(colocarM());

const string = str.split(' ').reduce((acumulador, palavra) => {
    acumulador.push(palavra[0].toUpperCase() + palavra.substring(1));
    return acumulador;
},[]).join(' ');

console.log(string);
