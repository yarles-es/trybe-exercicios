/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

const valorDoProduto = 10;
const valorDeVenda = 20;

if ( valorDoProduto > 0 && valorDeVenda > 0){
    let impostoSobreOCusto = ( (20 / 100) * valorDoProduto);
    let valorDoCustoTotal = (valorDoProduto + impostoSobreOCusto);
    let lucro = (valorDeVenda - valorDoCustoTotal);
    let lucroUnidade = lucro;
    let lucro1000Unidades = (lucro * 1000);
    
    console.log( 'Irá ter um lucro de R$:', lucroUnidade,  'Por Unidade, e um lucro de R$:', lucro1000Unidades, " na venda de 1000 Unidades.");

}else {
    console.log('Erro, valor invalido!');
}


