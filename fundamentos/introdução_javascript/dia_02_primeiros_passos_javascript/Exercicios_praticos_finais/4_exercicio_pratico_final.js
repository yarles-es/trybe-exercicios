/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let mediaAritmetica = 0;
for (let contador = 0; contador < numbers.length; contador += 1) {
    total = total + numbers[contador];
}
mediaAritmetica = total / numbers.length;
console.log('A soma dos todas Arrays é:', total);
if (mediaAritmetica > 20) {
    console.log('Média aritmética tem valor maior que 20, sendo de: ',mediaAritmetica);
}else {
    console.log('Média aritmética tem valor menor ou igual a 20, sendo de: ',mediaAritmetica);
}