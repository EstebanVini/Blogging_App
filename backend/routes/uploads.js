const express = require('express');
const router = express.Router();
const upload = require('../config/gridfs');

// Ruta para subir múltiples imágenes
router.post('/', upload.array('files', 10), (req, res) => {  // Permite hasta 10 imágenes por solicitud
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No se subió ningún archivo.');
  }

  // req.files contiene un array de metadatos de los archivos subidos a GridFS
  const fileIds = req.files.map(file => file.id);  // Extraemos los ObjectIds de cada archivo
  res.json({
    fileIds,  // Devolvemos los ObjectIds de todas las imágenes subidas
    files: req.files
  });
});

module.exports = router;
