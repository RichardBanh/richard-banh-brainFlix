import React, { Component } from 'react';

class Form extends Component {
 render() { 
  return (
   <div className="comment-section">
      <h2>3 Comments</h2>
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