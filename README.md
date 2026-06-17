# Conversor de Unidades CI/CD

Aplicación web simple para demostrar un flujo de Integración Continua y Entrega Continua con una interfaz clara, lógica testeable y despliegue en Vercel.

## Qué hace

- Convierte kilómetros a metros.
- Convierte metros a centímetros.
- Valida el valor ingresado antes de convertir.
- Muestra el resultado o un mensaje de error en pantalla.
- Notifica el resultado del pipeline en Discord cuando el webhook está configurado.

## Tecnologías

- HTML y CSS
- JavaScript sin frameworks
- Jest para pruebas automatizadas
- ESLint para inspección de código
- GitHub Actions para CI
- Vercel para despliegue

## Estructura

- `index.html`: interfaz principal.
- `styles.css`: estilos de la aplicación.
- `src/conversor.js`: lógica pura de conversión y validación.
- `src/app.js`: conexión entre la UI y la lógica.
- `tests/conversor.test.js`: pruebas automatizadas.
- `.github/workflows/ci.yml`: pipeline de CI.
- `vercel.json`: configuración de despliegue.

## Scripts disponibles

- `npm install`: instala dependencias.
- `npm test`: ejecuta las pruebas con Jest.
- `npm run lint`: ejecuta ESLint sobre `src/` y `tests/`.
- `npm run build`: valida los archivos principales del proyecto.
- `npm start`: levanta la app localmente con `serve`.

## Ejecución local

```bash
npm install
npm start
```

Luego abrí la URL que muestra `serve`.

## Flujo CI/CD

El repositorio ejecuta automáticamente `lint`, `tests` y `build` en GitHub Actions cuando hay un `push` o un `pull_request` sobre `main`.

Si esos chequeos fallan, el pipeline queda en rojo, y si pasan en verde. Eso es notificado a un server en Discord y la misma depende del secret `DISCORD_WEBHOOK_URL`.

## Despliegue en Vercel

El proyecto está preparado para desplegarse como sitio estático. La configuración usa `npm run build` como comando de build y publica la raíz del repositorio.

## Notas

La app fue reducida a dos conversiones para mantenerla simple y enfocada en la demostración de CI/CD.
