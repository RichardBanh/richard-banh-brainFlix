import React, { Component } from "react";
import Video from "./Video";
import Videotitle from "./Videotitle";
import Form from "./Form";
import Commentlist from "./CommentList";
import Videolist from "./Videolist";
import axios from "axios";
// Going to do a axios call function
// Then then state change function

class Videosection extends Component {
  constructor(props) {
    super(props);
    this.axioscall = this.axioscall.bind(this);
    this.urlonclick = this.urlonclick.bind(this);
    this.state = {
      mainVideo: this.props.mainVideo,
      comments: this.props.mainVideo.comments,
      image: this.props.mainVideo.image,
      sideVideo: this.props.sideVideo
    };
  }

  axioscall(urlonclick) {
    axios.get(urlonclick).then(response => {
      this.setState({
        image: response.data.image,
        mainVideo: response.data,
        comments: response.data.comments
      });
    });
  }

  urlonclick(id) {
    return `https://project-2-api.herokuapp.com/videos/${id}?api_key=58d3de8d-b26f-49c9-bb56-b810f7c8432e`;
  }

  render() {
    return (
      <div>
        <Video image={this.state.image} />
        <div className="flexing5">
          <div className="">
            <Videotitle mainVideo={this.state.mainVideo} />
            <Form />
            <Commentlist comments={this.state.comments} />
          </div>
          <div>
            <Videolist
              suggestedlistdata={this.state.sideVideo}
              mainVideo={this.state.mainVideo}
              axioscall={this.axioscall}
              urlonclick={this.urlonclick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Videosection;
