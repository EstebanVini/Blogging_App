const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  // Leer el token del header (Bearer token)
  const token = req.header('Authorization');

  // Verificar si no hay token
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, permiso no válido' });
  }

  try {
    // Verificar el token (elimina "Bearer " del token antes de verificar)
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded.user;  // Guardamos el usuario decodificado en el request
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};
