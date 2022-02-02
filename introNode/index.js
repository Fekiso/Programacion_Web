const express = require("express");
const app = express();

app.get("*", (request, response) => {
  response.send({ message: "Hola express" });
});

app.listen(3000, () => console.log("Nuestra app esta escuchando por el puerto 3000"));

/*Comados usados:
npm init -y: inicializamos node y le damos de entrada que si a todas las preguntas
npm i -s express@4.17.1: instalamos ecpress en la version 4.17.1
node index.js: corremos la app desde el directorio indicado*/
