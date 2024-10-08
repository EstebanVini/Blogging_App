const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
require('dotenv').config();  // Asegúrate de tener configurado tu archivo .env

// Configuración de Multer para almacenar imágenes en MongoDB usando GridFS
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads', // El nombre del bucket en GridFS
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });
module.exports = upload;
