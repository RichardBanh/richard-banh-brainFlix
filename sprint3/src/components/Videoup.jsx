import React, { Component } from "react";
import axios from "axios";
const urlvid = `http://localhost:8080/videos`;

class Videoup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description_section: "",
      title_section: ""
    };
  }
  post = () => {
    if (!this.state.description_section || !this.state.title_section) {
      return alert("Please enter description and or title");
    }
    axios
      .post(urlvid, {
        title: this.state.title_section,
        description: this.state.description_section
      })
      .then(response => {
        alert(response.data);
        window.location.reload();
      });
  };

  update_input_state = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  cancel = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className='upload'>
        <h2 className='boopers'>Upload Video</h2>
        <div className='flexing5'>
          <div className='h4-title'>
            <h4>VIDEO THUMBNAIL</h4>
            <img src='./Images/upload-video-preview.jpg' alt='' />
          </div>
          <div className='comment-section'>
            <div className='text-box text-box1'>
              <form action=''>
                <h4>TITLE YOUR VIDEO</h4>
                <textarea
                  id='title'
                  type='text'
                  name='title_section'
                  placeholder='Add a title to your video!'
                  onChange={this.update_input_state}
                />
                <br />
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea
                  id='description'
                  type='text'
                  name='description_section'
                  placeholder='Add a description of your video'
                  onChange={this.update_input_state}
                />
              </form>
              <div className='flexing4'>
                <button className='form' onClick={this.post}>
                  PUBLISH
                </button>
                <div className='center' onClick={this.cancel}>
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
