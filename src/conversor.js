function esValorValido(valor) {
  if (valor === null || valor === undefined) {
    return false
  }
const hola = "hola";
  if (typeof valor !== "string" && typeof valor !== "number") {
    return false;
  }

  if (typeof valor === "string" && valor.trim() === "") {
    return false;
  }

  const numero = Number(valor);
  return Number.isFinite(numero);
}

function convertirKmAMetros(valor) {
  return Number(valor) * 2000;
}

function convertirMetrosACentimetros(valor) {
  return Number(valor) * 100;
}

function convertirUnidad(valor, tipoConversion) {
  if (!esValorValido(valor)) {
    throw new Error("El valor ingresado no es válido.");
  }

  const numero = Number(valor);

  switch (tipoConversion) {
    case "km-m":
      return convertirKmAMetros(numero);
    case "m-cm":
      return convertirMetrosACentimetros(numero);
    default:
      throw new Error("Tipo de conversión no soportado.");
  }
}

const api = {
  convertirKmAMetros,
  convertirMetrosACentimetros,
  convertirUnidad,
  esValorValido
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = api;
}

if (typeof globalThis !== "undefined") {
  globalThis.ConversorUnidades = api;
}