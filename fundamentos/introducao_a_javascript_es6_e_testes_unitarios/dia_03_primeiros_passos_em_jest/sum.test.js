const {sum, myRemove, myFizzBuzz} = require("./sum");

describe("Testa a função sum", () => {
  it('retorna o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it(' "5" + 0 é igual a Error', () => {
    expect(() => sum("5" + 0)).toThrowError();
    expect(() => sum("5" + 0)).toThrowError("parametro não é um numero!");
  });
});

describe('Testa a função myRemove', () => {
    it('se retorna uma cópia desse array sem o elemento 3 do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    it('se não retona uma copia identica do array entrada', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4])
    })
    it('se retorna array vazio ao selecionar posição inexistente do array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});

describe('Testa a função myFizzBuzz', () =>{
    it('se a função retorna "fizzbuzz" se o numero é divisivel por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('se a função retorna "fizz" se o numero for divisivel apenas por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('se a função retorna "buzz" se o numero for divisivel apenas por 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('se a função retorna o valor do numero se nao for divisivel por 3 e nem por 5', () =>{
        expect(myFizzBuzz(1)).toBe(1);
    });

    it('se a função retorna o valor false caso a entrada não for um numero', () => {
        expect(myFizzBuzz('1')).toBe(false)
    });
});

