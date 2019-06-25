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
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this._loadUsername();
    this._loadComments();
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
    const { comments } = this.state;
    comments.push(comment);
    this.setState({
      comments: comments
    });
    this._saveComments(comments);
  }

  // save username in localstorage and autoload username after reloading the page(username persistence)
  handleBlur(event) {
    const { value } = event.target;
    this._saveUsername(value);
  }

  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({
        username: username
      });
    }
  }

  // comment persistence
  _saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  _loadComments() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({
        comments: comments
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onBlur={this.handleBlur}
          data={this.state}
        />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
