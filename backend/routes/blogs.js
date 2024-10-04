const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blogController');

// Obtener todos los blogs
router.get('/', getBlogs);

// Crear un nuevo blog
router.post('/', createBlog);

module.exports = router;
