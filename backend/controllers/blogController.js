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

module.exports = { getBlogs, createBlog };
