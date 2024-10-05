const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Ruta para obtener una imagen por su ObjectId desde GridFS
router.get('/:id', (req, res) => {
  const fileId = req.params.id;

  const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });

  // Descargar la imagen de GridFS
  gfs.openDownloadStream(new mongoose.Types.ObjectId(fileId))
    .pipe(res)
    .on('error', (err) => {
      res.status(404).send('No se pudo encontrar la imagen');
    })
    .on('finish', () => {
      console.log('Archivo entregado');
    });
});

module.exports = router;
