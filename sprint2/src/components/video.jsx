import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="VideoSec">
        <video controls poster={this.props.image}>
          <source src="./Video/Video.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Video;
