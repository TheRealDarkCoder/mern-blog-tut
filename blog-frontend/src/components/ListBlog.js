import React from 'react';

const ListBlog = ({ blogs, deleteBlogs }) => {
  return (
    <ul>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => {
          return (
            <li key={blog._id} onClick={() => deleteBlogs(blog._id)}>
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
              <p>Written by {blog.author} on {blog.date}</p>
            </li>
          );
        })
      ) : (
        <li>No blogs(s) left</li>
      )}
    </ul>
  );
};

export default ListBlog;