const Blog = require('../models/Blog');

// Obtener todos los blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los blogs');
  }
};

// Obtener un solo blog por ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog no encontrado' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el blog');
  }
};

// Crear un nuevo blog
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
module.exports = { getBlogs, getBlogById, createBlog };
