import React, { Component } from "react";
import Comment from "../components/Comment";
import uuid from "uuid";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return <Comment comment={comment} key={uuid.v4()} />;
        })}
      </div>
    );
  }
}

export default CommentList;
