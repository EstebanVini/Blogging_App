const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blogController');  // Asegúrate de que esta línea esté bien

// Definir la ruta para obtener todos los blogs
router.get('/', getBlogs);

// Definir la ruta para crear un nuevo blog
router.post('/', createBlog);

module.exports = router;