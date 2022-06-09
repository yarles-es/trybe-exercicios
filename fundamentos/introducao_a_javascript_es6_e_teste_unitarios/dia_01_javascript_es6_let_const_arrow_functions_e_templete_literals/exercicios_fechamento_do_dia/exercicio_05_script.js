const button = document.querySelector('#click');
const contador = document.querySelector('#contador');


button.addEventListener('click', () => {
    let numero = parseInt(contador.innerHTML) + 1;
    contador.innerHTML = numero;
});