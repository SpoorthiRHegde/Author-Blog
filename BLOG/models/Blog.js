// models/blog.js
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  blogContent: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
});

const Blog= mongoose.model('blog', blogSchema);
module.exports=Blog