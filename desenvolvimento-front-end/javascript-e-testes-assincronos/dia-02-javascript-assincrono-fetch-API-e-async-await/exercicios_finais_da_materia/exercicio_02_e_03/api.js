


const moedasCripto = async () => {
    const Url = `https://api.coincap.io/v2/assets`;
    
    const moedas = await fetch(Url)
    .then((response) => response.json())
    .then((value) => value.data)
    .catch((error) => ('Algo Inesperado aconteceu', error))
    return moedas;
};

const verValoresMoeda = async () => {
    const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`;
    const endpoint = `/currencies/usd.min.json`;
    const UrlCompleted = baseUrl + endpoint;

    const valores = await fetch(UrlCompleted)
    .then((response) => response.json())
    .then(({usd:{brl}}) => brl)
    .catch((error) => ('algo Inesperado aconteceu', error));
    return valores;
}

const adicionaMoeda = async () => {
    const moedas = await moedasCripto();
    const usdValores = await verValoresMoeda()
    const ul = document.querySelector('#lista');

    const primeiras10Moedas = moedas.filter((moeda) => Number(moeda.rank) <= 10);
    primeiras10Moedas.forEach(({ name, symbol, priceUsd }) =>{
        const valorEmReal = priceUsd * usdValores ;
        const li = document.createElement('li');
        li.innerHTML = `${name} (${symbol}): R$ ${Number(valorEmReal).toFixed(2)}`;
        ul.appendChild(li);
    });

}
window.onload = () => {
    adicionaMoeda();
}
