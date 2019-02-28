import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="VideoSec">
        <video controls poster={this.props.image} />
      </div>
    );
  }
}

export default Video;
