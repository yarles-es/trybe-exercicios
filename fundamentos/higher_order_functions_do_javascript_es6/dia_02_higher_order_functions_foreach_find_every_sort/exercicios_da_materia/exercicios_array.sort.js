{
// Veja este exemplo com um array de strings:
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ];
}

{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
};

{
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

{
//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.    

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a, b) => a.age - b.age);
  console.log(people);
};

{
// orderna pela ordem dos nomes;
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
    ];
    people.sort((nomeA, nomeB) => nomeA.name < nomeB.name? -1 : nomeA.name > nomeB.name? 1 : 0);
    console.log(people);
};

{
// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
    ];
    people.sort((a, b) => b.age - a.age); 
    console.log(people);
};