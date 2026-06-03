const { obtenerMensajeExito } = require("../src/mensaje");

test("debe devolver el mensaje de éxito del entorno CI/CD", () => {
  expect(obtenerMensajeExito()).toBe(
    "Integración y entrega continua funcionando correctamente v2"
  );
});