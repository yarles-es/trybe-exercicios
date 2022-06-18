const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const lesson4 = {
  materia: "Matemática",
  numeroEstudantes: 30,
  professor: "Carlos",
  turno: "noite",
};

// //exercicio 01;
// const adicionarTurno = (objeto, key, valor) => {
//   objeto[key] = valor;
// };
// adicionarTurno(lesson2, Object.keys(lesson3)[3], lesson3.turno);
// console.log(lesson2);

// //exercicio 02;
// const listarKeys = (objeto) => Object.keys(objeto);
// console.log(listarKeys(lesson1));

// // //exercicio 03;
// const contarKeys = (objeto) => Object.keys(objeto).length;
// console.log(contarKeys(lesson1));

// // //exercicio 04;
// const valoresKey = (objeto) => Object.values(objeto);
// console.log(valoresKey(lesson1));

// //exercicios 05;
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

//exercicio 06;
// const contadorEstudantes = (objeto) => {
//    let total = 0;
//    const array = Object.keys(objeto);
//    console.log(array);

//    for (index in array) {
//     total += objeto[array[index]].numeroEstudantes;
//    }
//    return total;
// }

// console.log(contadorEstudantes(allLessons));

//exercicio 07;
// const valorObjeto = (objeto, posicao) => {
// const valores = Object.values(objeto);
// return valores[posicao];

// }
// console.log(valorObjeto(lesson3, 1));

//exercicio 08;
// const verificaParDeDados = (objeto, chave, valor) => {
//   const objetoKeys = Object.keys(objeto);
//   let resposta = undefined;
//    for(index in objetoKeys){
//     if (objetoKeys[index] === chave && objeto[objetoKeys[index]] === valor){
//       resposta = true;
//     }else{
//       resposta = false;
//     }
//    }
//    return resposta;
// }
// console.log(verificaParDeDados(lesson3, 'turno','noite'))

//exercicio Bonus 01;
// const contadorAlunos = (objeto) => {
//   let total = 0;
//   let objetoKeys = Object.keys(objeto);

//   for (index in objetoKeys) {
//     if (objeto[objetoKeys[index]].materia === 'Matemática') {
//       total = total + objeto[objetoKeys[index]].numeroEstudantes;
//     }
//   }
//   return total;
// }
// console.log(contadorAlunos(allLessons))

// const lesson1 = {
//   materia: "Matemática",
//   numeroEstudantes: 20,
//   professor: "Maria Clara",
//   turno: "manhã",
// };

// const lesson2 = {
//   materia: "História",
//   numeroEstudantes: 20,
//   professor: "Carlos",
// };

// const lesson3 = {
//   materia: "Matemática",
//   numeroEstudantes: 10,
//   professor: "Maria Clara",
//   turno: "noite",
// };

// const lesson4 = {
//   materia: "Matemática",
//   numeroEstudantes: 30,
//   professor: "Carlos",
//   turno: "noite",
// };

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//exercicio Bonus 02;
// const createReport = (objeto, prof) => {
//   const objetoKeys = Object.keys(objeto);
//   let aulas = [];
//   let professor = "";
//   let estudantes = 0;
//   for (index in objetoKeys) {
//     if (objeto[objetoKeys[index]].professor === prof) {
//       aulas.push(objeto[objetoKeys[index]].materia);
//       estudantes += objeto[objetoKeys[index]].numeroEstudantes;
//       professor = objeto[objetoKeys[index]].professor;
//     }
//   }

//   return { professor: professor, aulas: aulas, estudantes: estudantes };
// };

// console.log(createReport(allLessons, "Maria Clara"));

// // Gabarito da 02 Bonus;
// const getInfo = (obj, name) => {
//   const allLessons = [];
//   let allStudent = 0;
//   const array = Object.values(obj);
//   for (index in array) {
//     if (array[index].professor === name) {
//       allLessons.push(array[index].materia)
//       allStudent += array[index].numeroEstudantes;
//     }
//   }
//   return {lessons: allLessons, estudantes: allStudent};
// }

// const createReport = (allLessons, name) => {
//   const report = {};
//   report.professor = name;
//   Object.assign(report, getInfo(allLessons, name));
//   return report;
// }
// console.log(createReport(allLessons, 'Maria Clara'));
