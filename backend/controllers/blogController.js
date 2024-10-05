const Blog = require('../models/Blog');

// Controlador para obtener todos los blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los blogs');
  }
};

// Controlador para crear un nuevo blog
const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear el blog');
  }
};

// Exportar los controladores
module.exports = { getBlogs, createBlog };
