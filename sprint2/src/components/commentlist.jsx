import React, { Component } from 'react';
import Comment from './comment'
class CommentL extends Component {
 render() { 
  return ( 
   <div>
     {console.log(this.props.comments)}
   <Comment comments={this.props.comments}/>
   </div>
   );

 }
}
 
export default CommentL;