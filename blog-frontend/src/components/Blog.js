import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListBlog from './ListBlog';

class Blog extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    this.getBlogs();
  }

  getBlogs = () => {
    axios
      .get('/api/blog')
      .then((res) => {
        if (res.data) {
          this.setState({
            blogs: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteBlog = (id) => {
    axios
      .delete(`/api/blog/${id}`)
      .then((res) => {
        if (res.data) {
          this.getBlogs();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { blogs } = this.state;

    return (
      <div>
        <h1>My Blogs(s)</h1>
        <Input getBlogs={this.getBlogs} />
        <ListBlog blogs={blogs} deleteBlogs={this.deleteBlog} />
      </div>
    );
  }
}

export default Blog;