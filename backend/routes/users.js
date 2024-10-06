const express = require('express');
const router = express.Router();
const { getUserBlogs, addBlogToUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');  // Middleware de autenticación

// Ruta para obtener los blogs del usuario autenticado
router.get('/blogs', auth, getUserBlogs);

// Ruta para agregar un blog a un usuario
router.post('/blogs/add', auth, addBlogToUser);

module.exports = router;
