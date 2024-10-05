const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blogController');

// Ruta para obtener todos los blogs
router.get('/', getBlogs);

// Ruta para crear un nuevo blog
router.post('/', createBlog);

module.exports = router;