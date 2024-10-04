const express = require('express');
const router = express.Router();
const upload = require('../config/gridfs');

// Ruta para subir imágenes
router.post('/', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;
