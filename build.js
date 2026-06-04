const fs = require("fs");

const archivosRequeridos = [
  "index.html",
  "styles.css",
  "src/app.js",
  "src/conversor.js",
  "tests/conversor.test.js"
];

for (const archivo of archivosRequeridos) {
  if (!fs.existsSync(archivo)) {
    console.error(`Falta el archivo requerido: ${archivo}`);
    process.exit(1);
  }
}

console.log("Build ejecutada correctamente. Archivos principales verificados.");