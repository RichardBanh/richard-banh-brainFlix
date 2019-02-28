import React, { Component } from 'react';
import Comment from './comment'
class CommentL extends Component {
 render() { 
  return ( 
   <div>
   <Comment comment={this.props.comments}/>
   </div>
   );

 }
}
 
export default CommentL;