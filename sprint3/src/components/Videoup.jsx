import React, { Component } from "react";
import axios from "axios";
const urlvid = `http://localhost:8080/videos`;



class Videoup extends Component {
  post=()=> {
    axios
      .post(urlvid, {
        title: this.state.valuetitle,
        description: this.state.valuedescription
      })
      .then(response => {
        alert(response.data);
      });
    document.getElementsByid(this.description).reset();
  }
  
  cancel=()=> {
    document.getElementById(this.title).reset();
    document.getElementById(this.description).reset();
  }
  
  handling_change = (event)=>{
    this.setState ={
      [event.target.id]: event.target.value
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null
    };
  }
  render() {
    return (
      <div className="upload">
        <h2 className="boopers">Upload Video</h2>
        <div className="flexing5">
          <div className="h4-title">
            <h4>VIDEO THUMBNAIL</h4>
            <img src="./Images/upload-video-preview.jpg" alt="" />
          </div>
          <div className="comment-section">
            <div className="text-box text-box1">
              <form action="">
                <h4>TITLE YOUR VIDEO</h4>
                <textarea
                  id="title"
                  type="text"
                  name="comment-section"
                  placeholder="Add a title to your video!"
                  onChange={this.handling_change}
                />
                <br />
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea
                  id="description"
                  type="text"
                  name="comment-section"
                  placeholder="Add a description of your video"
                  onChange={this.handling_change}
                />
              </form>
              <div className="flexing4">
                <button className="form" onClick={this.post}>
                  PUBLISH
                </button>
                <div className="center" onClick={this.cancel}>
                  CANCEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videoup;
