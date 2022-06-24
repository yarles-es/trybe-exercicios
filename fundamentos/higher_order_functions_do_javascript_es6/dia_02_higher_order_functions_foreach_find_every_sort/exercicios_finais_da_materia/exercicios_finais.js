const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// // exercicio 01;
// {
// const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

// console.log(authorBornIn1947());
// }

// //exercicio 02;
// {
// function smallerName() {
//     let nameBook = books[0].name
//     books.forEach((book) => {
//         if (book.name.length < nameBook.length) {
//             nameBook = book.name
//         }
//     });
//         return nameBook;
// }
// console.log(smallerName());
// }
// //exercicio 03;
// {
// function getNamedBook() {
//     let caracter26 = ''
//     books.forEach((book) => {
//         if (book.name.length === 26) {
//             caracter26 = book;
//         }  
//     });
//     return caracter26;
// }
// console.log(getNamedBook());
// }

// // exercicio 04;
// {
// const booksOrderedByReleaseYearDesc = () => books.sort((a, b)=> {b.releaseYear - a.releaseYear});
// console.log(booksOrderedByReleaseYearDesc());
// }

// exercicio 05;
// {
// function everyoneWasBornOnSecXX() {
//   return books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);
// };

// console.log(everyoneWasBornOnSecXX());
// }

// // exercicio 06;
// {
// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
// };
// console.log(someBookWasReleaseOnThe80s());
// }

// exercicio 07;
// const expectedResult = false;

// function authorUnique() {
//   return books.every((book) => books.some((bookSome) => (book.author.birthYear === bookSome.author.birthYear) && (bookSome.author.name !== book.author.name)));
// }
// console.log(authorUnique());
