const salarioBruto = 5100;
let inss =undefined;
let impostoDeRenda = undefined;
let salarioReceber = undefined;

if (salarioBruto < 1556.94) {
    inss = (salarioBruto * (8/100));
}else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    inss = (salarioBruto * (9/100));
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
     inss = (salarioBruto * (11/100));
}else {
    inss = 570.88;
}

const salarioBase = (salarioBruto - inss);

if (salarioBase <= 1903.98) {
     impostoDeRenda = inss;  
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoDeRenda = (((7.5/100) * salarioBase) - 142.80);
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoDeRenda = (((15/100) * salarioBase) - 354.80);
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoDeRenda = (((22.5/100) * salarioBase) - 636.13);
}else {
    impostoDeRenda = (((27.5/100) * salarioBase) - 869.36);  
}

salarioReceber = (salarioBase - impostoDeRenda);

console.log('O salario a receber é de R$:', salarioReceber,'já descontando INSS e IR. ');



