const mensaje =
  (typeof window !== "undefined" && window.obtenerMensajeExito)
    ? window.obtenerMensajeExito()
    : "Integración y entrega continua funcionando correctamente v2";

function setMensajeEnDOM() {
  const contenedorMensaje = document.getElementById("mensaje-exito");
  if (contenedorMensaje) contenedorMensaje.textContent = mensaje;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setMensajeEnDOM);
} else {
  setMensajeEnDOM();
}