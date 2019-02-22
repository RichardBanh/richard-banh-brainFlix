import React, { Component } from 'react';

class Comment extends Component {
 render() { 
  const comlist = this.props.comment.map(comment =>{
    return (
      <div className='commentpicture'>
        <div class= "blankimg"></div>
        <div class="commenttitle">
          <div class="titlebox">
            <div class="name">{comment.name}</div>
            <div class="date">{comment.date}</div>
          </div>
          <div class="comment">{comment.comment}</div>
        </div>
      </div>
    )
  })
  return (
    <div>
      {comlist}
     </div>
    );
 }
}
 
export default Comment;