const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para loggear un usuario
router.post('/login', loginUser);

module.exports = router;
