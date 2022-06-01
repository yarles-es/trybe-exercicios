const submit = document.getElementById("enviar-informacao");
const concordaFotos = document.querySelector("#concordo");
const enviarInformacao = document.querySelector("#enviar-informacao");
const email = document.querySelector("#email");
const nome = document.querySelector("#nome-completo");
const texto = document.querySelector("#explicacao");

function interromper(event) {
  event.preventDefault();
  const validation = textoValidar();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

window.onload = function () {
  submit.addEventListener("click", interromper);
  concordaFotos.addEventListener("change", ativaEnviar);
};

function ativaEnviar() {
  enviarInformacao.disabled = !concordaFotos.checked;
}

function textoValidar() {
  email.value.length;
  const emailInvalido = email < 10 || email > 50;

  nome.value.length;
  const nomeInvalido = nome < 10 || noem > 40;

  texto.value.length;
  const invalidtexto = texto > 500;

  if (emailInvalido || nomeInvalido || invalidtexto) {
    return false;
  } else {
    return true;
  }
}
