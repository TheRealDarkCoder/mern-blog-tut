import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  state = {
    title: "Title 1",
    body: "",
    author: "Faiyaz",
    hidden: false
  };

  addBlog = () => {
    const blog = { data: this.state };

    if (blog.data.body && blog.data.body.length > 0) {
      axios
        .post('/api/blog/create', blog.data)
        .then((res) => {
          if (res.data) {
            this.props.getBlogs();
            this.setState({ 
                title: "Title 1",
                body: "",
                author: "Faiyaz",
                hidden: false });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleBody = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  render() {
    let { titleAction } = this.state.title;
    let { bodyAction } = this.state.body;
    return (
      <div>
        <input type="text" onChange={this.handleTitle} value={titleAction} />
        <textarea onChange={this.handleBody}>{bodyAction}</textarea>
        <button onClick={this.addBlog}>Add Blog</button>
      </div>
    );
  }
}

export default Input;