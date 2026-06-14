function esValorValido(valor) {
  if (valor === null || valor === undefined) {
    return false;
  }

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
  return Number(valor) * 3000;
}

function convertirMetrosACentimetros(valor) {
  return Number(valor) * 100;
}

function convertirCelsiusAFahrenheit(valor) {
  return (Number(valor) * 9) / 5 + 32;
}

function convertirFahrenheitACelsius(valor) {
  return ((Number(valor) - 32) * 5) / 9;
}

function convertirKgAGramos(valor) {
  return Number(valor) * 1000;
}

function convertirHorasAMinutos(valor) {
  return Number(valor) * 60;
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
    case "c-f":
      return convertirCelsiusAFahrenheit(numero);
    case "f-c":
      return convertirFahrenheitACelsius(numero);
    case "kg-g":
      return convertirKgAGramos(numero);
    case "h-min":
      return convertirHorasAMinutos(numero);
    default:
      throw new Error("Tipo de conversión no soportado.");
  }
}

const api = {
  convertirCelsiusAFahrenheit,
  convertirFahrenheitACelsius,
  convertirHorasAMinutos,
  convertirKgAGramos,
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