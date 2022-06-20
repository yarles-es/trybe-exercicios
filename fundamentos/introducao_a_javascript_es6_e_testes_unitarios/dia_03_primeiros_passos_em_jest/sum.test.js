const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
} = require("./sum");

describe("Testa a função sum", () => {
  it("retorna o resultado da soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it(' "5" + 0 é igual a Error', () => {
    expect(() => sum("5" + 0)).toThrowError();
    expect(() => sum("5" + 0)).toThrowError("parametro não é um numero!");
  });
});

describe("Testa a função myRemove", () => {
  it("se retorna uma cópia desse array sem o elemento 3 do array", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("se não retona uma copia identica do array entrada", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
  it("se retorna array vazio ao selecionar posição inexistente do array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Testa a função myFizzBuzz", () => {
  it('se a função retorna "fizzbuzz" se o numero é divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it('se a função retorna "fizz" se o numero for divisivel apenas por 3', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });

  it('se a função retorna "buzz" se o numero for divisivel apenas por 5', () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it("se a função retorna o valor do numero se nao for divisivel por 3 e nem por 5", () => {
    expect(myFizzBuzz(1)).toBe(1);
  });

  it("se a função retorna o valor false caso a entrada não for um numero", () => {
    expect(myFizzBuzz("1")).toBe(false);
  });
});

describe("Testa a função encode", () => {
  it("se a encode é uma função", () => {
    expect(typeof encode).toEqual("function");
  });

  it("Se as vogais a, e, i, o, u, são convertidas para 1, 2, 3, 4, 5, respectivamente", () => {
    expect(encode("a, e, i, o, u")).toEqual("1, 2, 3, 4, 5");
  });

  it('Se ao adicionar ao usar a string "para" dá o retorno de "p1r1"', () => {
    expect(encode("para")).toEqual("p1r1");
  });

  it('Se ao adicionar ao usar a string "ele" dá o retorno de "2l2"', () => {
    expect(encode("ele")).toEqual("2l2");
  });

  it('Se ao adicionar ao usar a string "iris" dá o retorno de "3r3s"', () => {
    expect(encode("iris")).toEqual("3r3s");
  });

  it('Se ao adicionar ao usar a string "ovo" dá o retorno de "4v4"', () => {
    expect(encode("ovo")).toEqual("4v4");
  });

  it('Se ao adicionar ao usar a string "urubu" dá o retorno de "5r5b5"', () => {
    expect(encode("urubu")).toEqual("5r5b5");
  });

  it("Se retorna o numero de caracteres exato que foi colocado na string", () => {
    expect(encode("yarles").length).toEqual(6);
  });
});

describe("testa a função decode", () => {
  it("se encode é uma função", () => {
    expect(typeof decode).toEqual("function");
  });

  it("Se os numeros 1, 2, 3, 4, 5, são convertidos para a, e, i, o, u, respectivamente", () => {
    expect(decode("1, 2, 3, 4, 5")).toEqual("a, e, i, o, u");
  });

  it('Se ao adicionar ao usar a string "p1r1" dá o retorno de "para"', () => {
    expect(decode("p1r1")).toEqual("para");
  });

  it('Se ao adicionar ao usar a string "2l2" dá o retorno de "ele"', () => {
    expect(decode("2l2")).toEqual("ele");
  });

  it('Se ao adicionar ao usar a string "3r3s" dá o retorno de "iris"', () => {
    expect(decode("3r3s")).toEqual("iris");
  });

  it('Se ao adicionar ao usar a string "4v4" dá o retorno de "ovo"', () => {
    expect(decode("4v4")).toEqual("ovo");
  });

  it('Se ao adicionar ao usar a string "5r5b5" dá o retorno de "urubu"', () => {
    expect(decode("5r5b5")).toEqual("urubu");
  });

  it("Se retorna o numero de caracteres exato que foi colocado na string", () => {
    expect(decode("yarles").length).toEqual(6);
  });
});

describe("Testa a função techList", () => {
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });

  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

describe("Testa a função hydrate", () => {
  it("Testa se a função hydrate é definida", () => {
    expect(hydrate).toBeDefined();
  });

  it("Testa se hydrate é uma função", () => {
    expect(typeof hydrate).toBe("function");
  });

  it("Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber", () => {
    expect(hydrate("1 cerveja")).toBe("1 copo de água");
    
    expect(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")).toBe(
      "7 copos de água"
    );

    expect(hydrate("2 shots de tequila, 2 cervejas e 1 corote")).toBe(
      "5 copos de água"
    );

    expect(hydrate("1 copo de catuaba, 1 cervejas e 1 copo de vinho")).toBe(
      "3 copos de água"
    );
    
    expect(hydrate("4 caipirinhas e 2 cervejas")).toBe("6 copos de água");
  });
});
