const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

// Esta es la función para la hora que pide la Pág. 7
function obtenerHora() {
  const ahora = new Date();
  return ahora.toLocaleString("es-PE", {
    timeZone: "America/Lima"
  });
}

app.get("/", (req, res) => {
  res.send(`
    ${obtenerMensaje()}<br>
    Hora actual: ${obtenerHora()}
  `);
});

app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
