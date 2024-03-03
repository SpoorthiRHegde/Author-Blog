import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [authorName, setAuthorName] = useState('');

  const addNewBlog = () => {
    console.log("Submitting form...");
    // Your axios post request here
  };

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={addNewBlog}>
        <label>Title:</label><br />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <label>Blog Content:</label><br />
        <textarea value={blogContent} onChange={(e) => setBlogContent(e.target.value)} /><br />
        <label>Author Name:</label><br />
        <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
