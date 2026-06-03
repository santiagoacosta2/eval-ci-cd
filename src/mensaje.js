function obtenerMensajeExito() {
  return mensaje;
}

const mensaje = "Integración y entrega continua funcionando correctamente v2";

// Export for Node (CommonJS) so tests keep working
if (typeof module !== "undefined" && module.exports) {
  module.exports = { obtenerMensajeExito };
}

// Expose to browser when loaded as a script so `app.js` can reuse the same value
if (typeof window !== "undefined") {
  window.obtenerMensajeExito = obtenerMensajeExito;
}