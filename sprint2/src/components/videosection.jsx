import React, { Component } from "react";
import Video from "./video";
import Videotitle from "./videotitle.jsx";
import Form from "./form";
import CommentList from "./CommentList.jsx";
import Videolist from "./videolist.jsx";

class Videosection extends Component {
  render() {
    return (
      <div>
        <Video />
        <div className="flexing5">
          <div className="">
            <Videotitle mainVideo={this.props.mainVideo} />
            <Form />
            <CommentList comments={this.props.mainVideo.comments} />
          </div>
          <div>
            <Videolist suggestedlistdata={this.props.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Videosection;
