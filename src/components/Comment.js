import React, { Component } from "react";
import "../components/Comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <span className="comment-user">{this.props.comment.username}</span>：
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}

export default Comment;
