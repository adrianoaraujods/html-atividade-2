const formulario = document.querySelector("#form-contato");
const alerta = document.querySelector("#alerta");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  alerta.showModal();
  formulario.reset();
});