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
  const concordaFotos = document.querySelector("#concordo");
  const submit = document.getElementById("enviar-informacao");
  submit.addEventListener("click", interromper);
  concordaFotos.addEventListener("change", ativaConcordo);
};

function ativaConcordo() {
  const concordaFotos = document.querySelector("#concordo");
  const enviarInformacao = document.querySelector("#enviar-informacao");
  enviarInformacao.disabled = !concordaFotos.checked;
}

function textoValidar() {
  const email = document.querySelector("#email").value.length;
  const emailInvalido = email < 10 || email > 50;

  const nome = document.querySelector("#nome-completo").value.length;
  const nomeInvalido = nome < 10 || nome > 40;

  const texto = document.querySelector("#explicacao").value.length;
  const invalidReason = texto > 500;

  if (emailInvalido || nomeInvalido || invalidReason) {
    return false;
  } else {
    return true;
  }
}