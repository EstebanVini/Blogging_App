const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,      // Evita la advertencia del analizador URL
      useUnifiedTopology: true,   // Evita la advertencia sobre la nueva topología
    });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Salir si falla la conexión
  }
};

module.exports = connectDB;
