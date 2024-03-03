import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/blogs')
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addNewBlog = () => {
    console.log("Submitting form...");
    axios.post('http://localhost:8080/api/blogs', { title, blogContent, authorName })
      .then(res => {
        setBlogs([...blogs, res.data]);
        // Clear input fields after adding the blog
        setTitle('');
        setBlogContent('');
        setAuthorName('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h1>Blog App</h1>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
        <label htmlFor="blogContent">Blog Content: </label>
        <textarea id="blogContent" value={blogContent} onChange={(e) => setBlogContent(e.target.value)} /><br /><br />
        <label htmlFor="authorName">Author Name: </label>
        <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} /><br /><br />
        <button onClick={addNewBlog}>Add New Blog</button>
      </div>

      {/* Display existing blogs */}
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <h2>{blog.title}</h2>
          <p>Content: {blog.blogContent}</p>
          <p>Author: {blog.authorName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
