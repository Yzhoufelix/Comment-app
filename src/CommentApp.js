import React, { Component } from "react";
import "./CommentApp.css";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: "",
      comments: [] // To be transferd to CommentList
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Call onSubmit when user clicks submit button,
  // then keep then username set content box to empty

  handleSubmit() {
    if (this.onSubmit) {
      const { username, content } = this.state;
      this.onSubmit({ username, content });
    }
    this.setState({
      content: ""
    });
  }

  // comments: [{username, content, id}]
  onSubmit(comment) {
    if (!comment.username) {
      return alert("Please enter your username.");
    } else if (!comment.content) {
      return alert("Please add some content.");
    }
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    });
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
