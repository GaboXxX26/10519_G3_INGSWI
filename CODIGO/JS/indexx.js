const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

//Base de datos 

const config = {
  user: 'MSI-DC\User',
  password: '',
  server: 'MSI-DC\SQLEXPRESS',
  database: 'conjunto',
  options: {
    encrypt: true, // Habilitar la encriptación si tu base de datos lo requiere
  },
};

module.exports = config;


