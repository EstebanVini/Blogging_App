const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
