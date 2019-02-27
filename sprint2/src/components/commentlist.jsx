import React, { Component } from "react";
import Comment from "./comment";

class CommentList extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.comments)}
        <Comment comments={this.props.comments} />
      </div>
    );
  }
}

export default CommentList;
