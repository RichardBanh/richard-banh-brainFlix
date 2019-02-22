import React, { Component } from 'react';
class Videoup extends Component {
 render() { 
  return (
  <div className="upload">
    <h2 className="boopers">Upload Video</h2>
    <div className="flexing5">
      <div className="h4-title">
        <h4>VIDEO THUMBNAIL</h4>
        <img src="./Images/upload-video-preview.jpg" alt=""/>
      </div>
      <div className="comment-section">
        <div className="text-box text-box1">
            <form action="">
                <h4>TITLE YOUR VIDEO</h4>
                <textarea id="title" type="text" name="comment-section" placeholder="Add a title to your video!"></textarea>
                <br/>
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea id="description" type="text" name="comment-section" placeholder="Add a description of your video"></textarea>
            </form>
          <div className ="flexing4">
          <button className="form">PUBLISH</button>
          <div className="center">CANCEL</div>
          </div>
        </div>
    </div>
    </div>
  </div>
    );
 }
}
 
export default Videoup;