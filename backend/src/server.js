const express = require('express');
const connectDB = require('./config/db');
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/upload', require('./routes/uploads'));




const app = express();

// Conectar la base de datos
connectDB();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});



