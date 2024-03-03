// models/author.js
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  }
});
const Author=mongoose.model('author',AuthorSchema)
module.exports = Author