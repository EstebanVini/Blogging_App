const User = require('../models/User');
const Blog = require('../models/Blog');

// Obtener los blogs creados por el usuario autenticado
const getUserBlogs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('blogs');
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    res.json(user.blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};

// Agregar un blog a un usuario
const addBlogToUser = async (req, res) => {
  const { blogId } = req.body;

  try {
    // Verificar si el blog existe
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog no encontrado' });
    }

    // Buscar al usuario autenticado
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    // Agregar el blog al array de blogs del usuario
    if (user.blogs.includes(blogId)) {
      return res.status(400).json({ msg: 'El blog ya está asociado al usuario' });
    }

    user.blogs.push(blogId);
    await user.save();

    res.json({ msg: 'Blog agregado al usuario', user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { getUserBlogs, addBlogToUser };
