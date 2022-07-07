// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. 
const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  it('verifica se a função devolve string com letras maiusculas', (done) => {
    uppercase('yarles de andrade espirito santo', (str) => {
        try {
            expect(str).toBe('YARLES DE ANDRADE ESPIRITO SANTO');
            done()
        } catch (error) {
            done(error);
        }
    });
  });