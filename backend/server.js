const express = require('express');
const connectDB = require('./config/db');

// Inicializar la aplicación Express antes de usarla
const app = express();

// Conectar la base de datos
connectDB();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Definir las rutas después de inicializar 'app'
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/image', require('./routes/images'));  
app.use('/api/auth', require('./routes/auth'));    // Rutas de autenticación
app.use('/api/users', require('./routes/users')); 

// Iniciar el servidor en el puerto especificado en el archivo .env o en el puerto 5000 por defecto
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
