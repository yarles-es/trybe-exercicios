// Verifique que o retorno foi um array com os dois números pares do array numbers.
{
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]
};

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
{
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]
};

// usando como 2 funcoes para passar 2 parametros e aceitar qualquer array; 
{
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = (numbers, callback) => {
    return numbers.filter((number) => callback(number));
}

console.log(isEven(numbers, verifyEven));
};

//exercicio 02 da materia padrao;
{
const objPeople = [
{ name: 'José', age: 21 },
{ name: 'Lucas', age: 19 },
{ name: 'Maria', age: 16 },
{ name: 'Gilberto', age: 18 },
{ name: 'Vitor', age: 15 },
];
  
const verifyAgeDrive = (arrayOfPeople) => (
arrayOfPeople.filter((people) => (people.age < 18))
);
  
console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
};

// Exercicio 02 da materia modificado para retornar apenas o nome dos aprovados no array;
{
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
    ];
      
const verifyAgeDriveAproved = (ItemObject) => ItemObject.age >= 18;

const AgeDrive = (packObject, callback) => {
   let nomeAprovados = [];
    const aprovados = packObject.filter((ItemObject) => callback(ItemObject));
     aprovados.forEach((aprovado) => {
        nomeAprovados.push(aprovado.name);
     });
     return nomeAprovados;
};
console.log(AgeDrive(objPeople, verifyAgeDriveAproved));
};

// exercicio 03 da materia padrao;
{
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);
// Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
}

//exercicios 03 modificado para retirar nomes que começam com alguma letra;
{
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student[0] !== name);

const newListStudents = removeStudentByName('M', arrayMyStudents);
console.log(newListStudents); 
};

