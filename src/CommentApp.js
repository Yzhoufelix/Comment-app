import React, { Component } from "react";
import "./CommentApp.css";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
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

  handleSubmit() {
    if (this.onSubmit) {
      const { username, content } = this.state;
      this.onSubmit({ username, content });
    }
    this.setState({
      content: ""
    });
  }

  onSubmit(comment) {
    console.log(comment);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
          onSubmit={this.onSubmit}
        />
        <CommentList />
      </div>
    );
  }
}

export default CommentApp;
