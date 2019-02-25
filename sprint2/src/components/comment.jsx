import React, { Component } from 'react';

class Comment extends Component {
 render() { 
   if(this.props.comment === null) {
    return(
      <h1>Loading</h1>
    )
  }
  else{
    this.props.comment.map(comment =>{
      return (
        <div className="commentpicture">
          <div className="blankimg"></div>
          <div className="commenttitle">
            <div className="titlebox">
              <div className="name">{comment.name}</div>
              <div className="date">{comment.timestamp}</div>
            </div>
            <div className="comment">{comment.comment}</div>
          </div>
        </div>
      )
    })
  }
}
}
 
export default Comment;