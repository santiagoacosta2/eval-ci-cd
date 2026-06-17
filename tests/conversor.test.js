const {
  convertirKmAMetros,
  convertirMetrosACentimetros,
  convertirUnidad,
  esValorValido
} = require("../src/conversor");

describe("conversor de unidades", () => {
  test("convertirKmAMetros(2) devuelve 2000", () => {
    expect(convertirKmAMetros(2)).toBe(3000);
  });

  test("convertirMetrosACentimetros(3) devuelve 300", () => {
    expect(convertirMetrosACentimetros(3)).toBe(300);
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

