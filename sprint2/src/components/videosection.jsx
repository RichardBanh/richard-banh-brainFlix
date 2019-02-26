import React, { Component } from "react";
import Video from "./video";
import Videotitle from "./videotitle.jsx";
import Form from "./form";
import CommentL from "./commentlist.jsx";
import Videolist from "./videolist.jsx";

class Videosection extends Component {
  render() {
    return (
      <div>
        <Video />
        <div className="">
          <div className="">
            <Videotitle mainVideo={this.props.mainVideo} />
            <Form />
          </div>
          <CommentL comments={this.props.mainVideo.comments} />
          <Videolist suggestedlistdata={this.props.sideVideo} />
        </div>
      </div>
    );
  }
}

export default Videosection;
