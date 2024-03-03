// Blog.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/Blog.js');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});

// Database connection
const DB = 'mongodb+srv://Spoorthi:Spoorthi@cluster0.fhhstm5.mongodb.net/';
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Add a blog
app.post('/add-blog', async (req, res) => {
    const { title, blogContent, authorName } = req.body;
    try {
        const blog = new Blog({ title, blogContent, authorName });
        await blog.save();
        res.status(201).json({
            status: 'Success',
            data: blog
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

// Get all blogs
app.get('/get-blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json({
            status: 'Success',
            data: blogs
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

// Update a blog
app.put('/update-blog/:id', async (req, res) => {
    const { title, blogContent, authorName } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { title, blogContent, authorName }, { new: true });
        res.status(200).json({
            status: 'Success',
            data: updatedBlog
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

// Delete a blog
app.delete('/delete-blog/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'Success',
            message: 'Blog deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});


