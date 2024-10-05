const express = require('express');
const router = express.Router();
const upload = require('../config/gridfs');  // Archivo de configuración para Multer + GridFS

// Ruta para subir imágenes
router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se subió ningún archivo.');
  }
  // req.file contiene los metadatos del archivo subido a GridFS
  res.json({
    fileId: req.file.id,  // El ObjectId del archivo en GridFS
    filename: req.file.filename
  });
});

module.exports = router;
