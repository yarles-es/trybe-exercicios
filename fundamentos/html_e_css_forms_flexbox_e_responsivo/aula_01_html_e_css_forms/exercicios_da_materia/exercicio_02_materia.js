// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAconteceComA(event){
    event.preventDefault();
}
HREF_LINK.addEventListener('click', nadaAconteceComA);

function nadaAconteceComBox (event){
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', nadaAconteceComBox);

function somenteLetraA (event){
    const caractere = event.key;
    if(caractere !== 'a') {
        event.preventDefault();
    }
}
INPUT_TEXT.addEventListener('keypress',somenteLetraA);
