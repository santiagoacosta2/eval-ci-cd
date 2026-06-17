function obtenerConversor() {
  return typeof globalThis !== "undefined" ? globalThis.ConversorUnidades : null;
}
const hola = "saludo";
function actualizarEstado(elemento, texto, tipo) {
  if (!elemento) {
    return
  }

  elemento.textContent = texto;
  elemento.classList.remove("estado--error", "estado--exito");

  if (tipo === "error") {
    elemento.classList.add("estado--error");
  }

  if (tipo === "success") {
    elemento.classList.add("estado--exito");
  }
}

function formatearNumero(valor) {
  return new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 2
  }).format(valor);
}

function inicializarApp() {
  const conversor = obtenerConversor();
  const formulario = document.getElementById("form-conversor");
  const entradaValor = document.getElementById("valor-input");
  const selectorConversion = document.getElementById("tipo-conversion");
  const salidaResultado = document.getElementById("resultado");

  if (!formulario || !entradaValor || !selectorConversion || !salidaResultado || !conversor) {
    return;
  }

  actualizarEstado(
    salidaResultado,
    "Ingresá un valor y elegí una conversión para ver el resultado."
  );

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const valorIngresado = entradaValor.value;
    const tipoConversion = selectorConversion.value;

    if (!conversor.esValorValido(valorIngresado)) {
      actualizarEstado(salidaResultado, "Ingresá un valor numérico válido.", "error");
      return;
    }

    try {
      const resultado = conversor.convertirUnidad(valorIngresado, tipoConversion);
      actualizarEstado(
        salidaResultado,
        `Resultado: ${formatearNumero(resultado)}`,
        "success"
      );
    } catch (error) {
      actualizarEstado(
        salidaResultado,
        error instanceof Error ? error.message : "No se pudo realizar la conversión.",
        "error"
      );
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializarApp);
} else {
  inicializarApp();
}