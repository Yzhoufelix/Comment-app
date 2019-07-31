import React, { Component } from 'react';
import '../components/Comment.css';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propsTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  };

  constructor() {
    super();
    this.state = {
      timeString: ''
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(this._updateTimeString.bind(this), 3000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }

  // Displays the time a comment was posted
  _updateTimeString() {
    const now = Date.now();
    const duration = (now - this.props.comment.createdTime) / 1000;
    const timeDuration = duration => {
      switch (true) {
        case duration >= 60 * 60 * 24 * 2:
          return `${Math.round(duration / (60 * 60 * 24))} days ago`;
        case duration > 60 * 60 * 24 && duration < 60 * 60 * 24 * 2:
          return '1 day ago';
        case duration >= 60 * 60 * 2:
          return `${Math.round(duration / (60 * 60))} hours ago`;
        case duration > 60 * 60 && duration < 60 * 60 * 2:
          return '1 hours ago';
        case duration >= 60 * 2:
          return `${Math.round(duration / 60)} mins ago`;
        case duration > 60 && duration < 60 * 2:
          return '1 min ago';
        case duration > 1:
          return `${Math.round(Math.max(duration, 1))} s ago`;
        default:
          return '';
      }
    };

    this.setState({
      timeString: timeDuration(duration)
    });
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <div className='comment'>
        <span className='comment-username'>{comment.username}</span>：
        <p>{comment.content}</p>
        <span className='comment-createdtime'>{this.state.timeString}</span>
        <span className='comment-delete' onClick={this.handleDeleteComment}>
          Delete
        </span>
      </div>
    );
  }
}

export default Comment;
