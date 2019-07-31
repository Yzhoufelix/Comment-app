import React, { Component } from 'react';
import Comment from '../components/Comment';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  };
  static defaultProps = {
    comments: []
  };
  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }
  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <Comment
              comment={comment}
              key={uuid.v4()}
              index={i}
              onDeleteComment={this.handleDeleteComment}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;
