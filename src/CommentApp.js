import React, { Component } from "react";
import "./CommentApp.css";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";

class CommentApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentInput />
        <CommentList />
      </div>
    );
  }
}

export default CommentApp;
