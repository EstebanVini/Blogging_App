const express = require('express');
const router = express.Router();
const { getBlogs, getBlogById, createBlog } = require('../controllers/blogController');
const auth = require('../middlewares/auth');  // Importar el middleware de autenticación

// Ruta para obtener todos los blogs (pública)
router.get('/', getBlogs);

// Ruta para obtener un solo blog por ID (pública)
router.get('/:id', getBlogById);

// Ruta para crear un nuevo blog (protegida)
router.post('/', auth, createBlog);

module.exports = router;
