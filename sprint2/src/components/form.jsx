import React, { Component } from 'react';

class Form extends Component {
 render() { 
   const listlength = this.props.comlength.length
   console.log(listlength)
  return (
   <div className="comment-section">
      <h2>{listlength} Comments</h2>
      <div className="text-box">
         <div className="nameandphoto">
           <img src="./Images/Mohan-muruge.jpg" alt=""/>
           <form action="">
               <h4>JOIN THE CONVERSATION</h4>
               <textarea id="comment" type="text" name="comment-section"></textarea>
               <br/>
           </form>
         </div>
         <button className="form">COMMENT</button>
      </div>
   </div>
    );
 }
}
 
export default Form;