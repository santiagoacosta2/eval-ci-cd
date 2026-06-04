const {
  convertirCelsiusAFahrenheit,
  convertirFahrenheitACelsius,
  convertirHorasAMinutos,
  convertirKgAGramos,
  convertirKmAMetros,
  convertirMetrosACentimetros,
  convertirUnidad,
  esValorValido
} = require("../src/conversor");

describe("conversor de unidades", () => {
  test("convertirKmAMetros(2) devuelve 2000", () => {
    expect(convertirKmAMetros(2)).toBe(2000);
  });

  test("convertirMetrosACentimetros(3) devuelve 300", () => {
    expect(convertirMetrosACentimetros(3)).toBe(300);
  });

  test("convertirCelsiusAFahrenheit(0) devuelve 32", () => {
    expect(convertirCelsiusAFahrenheit(0)).toBe(32);
  });

  test("convertirCelsiusAFahrenheit(100) devuelve 212", () => {
    expect(convertirCelsiusAFahrenheit(100)).toBe(212);
  });

  test("convertirFahrenheitACelsius(32) devuelve 0", () => {
    expect(convertirFahrenheitACelsius(32)).toBe(0);
  });

  test("convertirKgAGramos(5) devuelve 5000", () => {
    expect(convertirKgAGramos(5)).toBe(5000);
  });

  test("convertirHorasAMinutos(2) devuelve 120", () => {
    expect(convertirHorasAMinutos(2)).toBe(120);
  });

  test("esValorValido(\"abc\") devuelve false", () => {
    expect(esValorValido("abc")).toBe(false);
  });

  test("esValorValido(\"\") devuelve false", () => {
    expect(esValorValido("")).toBe(false);
  });

  test("esValorValido(10) devuelve true", () => {
    expect(esValorValido(10)).toBe(true);
  });

  test("esValorValido(true) devuelve false", () => {
    expect(esValorValido(true)).toBe(false);
  });

  test("esValorValido(Infinity) devuelve false", () => {
    expect(esValorValido(Infinity)).toBe(false);
  });

  test("convertirUnidad(2, \"km-m\") devuelve 2000", () => {
    expect(convertirUnidad(2, "km-m")).toBe(2000);
  });

  test("convertirUnidad lanza error para un tipo desconocido", () => {
    expect(() => convertirUnidad(2, "desconocida")).toThrow(
      "Tipo de conversión no soportado."
    );
  });
});