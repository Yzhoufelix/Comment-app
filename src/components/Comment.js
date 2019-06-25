import React, { Component } from "react";
import "../components/Comment.css";
import PropTypes from "prop-types";

class Comment extends Component {
  static propsTypes = {
    comment: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      timeString: ""
    };
  }

  componentWillMount() {
    this._updateTimeString();
  }

  _updateTimeString() {
    const now = Date.now();
    const duration = (now - this.props.comment.createdTime) / 1000;
    // console.log(duration);
    const timeGap =
      duration > 60
        ? duration >= 60 * 2
          ? duration > 60 * 60
            ? duration >= 60 * 60 * 2
              ? duration > 60 * 60 * 24
                ? duration > 60 * 60 * 24 * 2
                  ? `${Math.round(duration / (60 * 60 * 24))} days ago`
                  : `${Math.round(duration / (60 * 60 * 24))} day ago`
                : `${Math.round(duration / (60 * 60))} hours ago`
              : `${Math.round(duration / (60 * 60))} hour ago`
            : `${Math.round(duration / 60)} mins ago`
          : `${Math.round(duration / 60)} min ago`
        : `${Math.round(Math.max(duration, 1))} s ago`;

    this.setState({
      timeString: timeGap
    });
  }

  render() {
    console.log(this.state.timeString);
    return (
      <div className="comment">
        <span className="comment-user">{this.props.comment.username}</span>：
        <p>{this.props.comment.content}</p>
        <span className="comment-createdtime">{this.state.timeString}</span>
      </div>
    );
  }
}

export default Comment;
