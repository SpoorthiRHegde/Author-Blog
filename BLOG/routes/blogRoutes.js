// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// POST route to add a new blog
router.post('/blogs', async (req, res) => {
  try {
    const { title, blogContent, authorName } = req.body;
    const blog = new Blog({ title, blogContent, authorName });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
