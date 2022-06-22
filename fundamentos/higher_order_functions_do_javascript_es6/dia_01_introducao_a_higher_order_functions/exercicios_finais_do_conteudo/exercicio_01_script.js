/* exercicio 01; */ {
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  const returnObject = (fullName) => {
    const contrated = fullName;
    const email = fullName.replace(' ', '_');
    const emailMinusculo = email.toLowerCase();
    const obj = {Nome: contrated, Email: `${emailMinusculo}@trybe.com`}
    return obj;
  };

  console.log(newEmployees(returnObject));
}

/* exercicio 02; */ {
  const checkNumber = (number, drawNumber) => {
    const result = (number === drawNumber)? `Parabens você ganhou!` : `Tente novamente`;
    return result;
  }
  const drawResult = (number, callback) => {
    const drawNumber = Math.floor((Math.random() * 5) + 1)
    return callback(number, drawNumber);
  }
  console.log(drawResult(1, checkNumber));
}

/* exercicio 03; */ {
const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const correctionAndPoints = (correctAnswers, checkAnswers) => {
  const gabaritoOficial = correctAnswers;
  const gabaritoRespostas = checkAnswers;
  let acertos = 0;
  let pontuacao = 0;
  const correntFeedback = gabaritoOficial.length === gabaritoRespostas.length ? true : false;
  if (correntFeedback === true) {
    for (let index = 0; index < gabaritoOficial.length; index += 1) {
      if (gabaritoRespostas[index] === "N.A") {
        gabaritoRespostas.splice([index], 1);
        gabaritoOficial.splice([index], 1);
      }
    }
    for (let index = 0; index < gabaritoOficial.length; index += 1) {
      if (gabaritoOficial[index] === gabaritoRespostas[index]) {
        acertos += 1;
        pontuacao += 1;
      } else {
        pontuacao -= 0.5;
      }
    }
    return {Acertos: acertos, Potuacao: pontuacao}
  } else {
    return 'Gabarito Incorreto.';
    }
};
const CorrectionFeedback = (correctAnswers, checkAnswers, callback) => {
    const resultado = callback(correctAnswers, checkAnswers);
    console.log(typeof resultado);
    if (typeof resultado === 'string'){
        console.log(resultado);
    } else {
    console.log(`
    Numero de acertos foi de ${resultado.Acertos}.
    E Pontuação total foi de ${resultado.Potuacao}.
`)};
};

CorrectionFeedback(RIGHT_ANSWERS, STUDENT_ANSWERS, correctionAndPoints);
}

/* exercicio 03, gabarito; */ {
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
};