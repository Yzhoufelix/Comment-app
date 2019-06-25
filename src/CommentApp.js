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
      // timeString: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this._loadUsername();
    this._loadComments();
    // this._updateTimeString();
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
      // const time = new Date();
      this.onSubmit({
        username: username,
        content: content,
        createdTime: Date.now()
      });
    }
    this.setState({
      content: ""
    });
  }

  // _updateTimeString() {
  //   const now = Date.now();
  //   const duration = (now - then) / 1000;
  //   const timeGap =
  //     duration > 60
  //       ? `$(Math.round(duration / 60)) min ago`
  //       : `$(Math.round(Math.max(duration,1))) s ago`;
  // }

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
    this._saveComments(comments); // save comment in localstorage
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

  // content persistence
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
    console.log(this.state.comments);
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
