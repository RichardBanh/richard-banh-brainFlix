import React, { Component } from "react";

class Comment extends Component {
  dateconverter(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear(timestamp);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var formatdate = `${month}/${day}/${year}`;
    return formatdate;
  }

  render() {
    console.log(this.props.comments);
    var boop = this.props.comments.map(comment => {
      return (
        <div className="commentpicture">
          <div className="blankimg" />
          <div className="commenttitle">
            <div className="titlebox">
              <div className="name">{comment.name}</div>
              <div className="date">
                {this.dateconverter(comment.timestamp)}
              </div>
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
