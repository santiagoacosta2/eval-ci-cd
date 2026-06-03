const mensaje = "Integración y entrega continua funcionando correctamente v2";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorMensaje = document.getElementById("mensaje-exito");

  if (contenedorMensaje) {
    contenedorMensaje.textContent = mensaje;
  }
});