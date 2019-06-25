import React, { Component } from "react";
import "../components/CommentInput.css";
import PropTypes from "prop-types";

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  };

  // give focus to textarea when component had been mounted
  componentDidMount() {
    this.textarea.focus();
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">Username:</span>
          <div className="comment-field-input">
            <input
              name="username"
              value={this.props.data.username}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">Content:</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => (this.textarea = textarea)} // use ref to manage focus
              name="content"
              value={this.props.data.content}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.props.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
