import React, { Component } from "react";
import "../components/CommentInput.css";

class CommentInput extends Component {
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">Username:</span>
          <div className="comment-field-input">
            <input
              name="username"
              value={this.props.data.username}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">Content:</span>
          <div className="comment-field-input">
            <textarea
              name="content"
              value={this.props.data.content}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.props.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
