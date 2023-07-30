const express = require('express');
const app = express();

const puerto = 4000;
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en el puerto ${puerto}`);
});
