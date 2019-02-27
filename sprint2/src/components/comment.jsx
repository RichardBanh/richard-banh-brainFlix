import React, { Component } from "react";

class Comment extends Component {
  render() {
    console.log(this.props.comments);
    var boop = this.props.comments.map(comment => {
      return (
        <div className="commentpicture">
          <div className="blankimg" />
          <div className="commenttitle">
            <div className="titlebox">
              <div className="name">{comment.name}</div>
              <div className="date">{comment.timestamp}</div>
            </div>
            <div className="comment">{comment.comment}</div>
          </div>
        </div>
      );
    });
    return boop;
  }
}

export default Comment;
