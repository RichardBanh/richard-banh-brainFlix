import React, { Component } from "react";
import Video from "./video";
import Videotitle from "./videotitle.jsx";
import Form from "./form";
import Commentlist from "./CommentList.jsx";
import Videolist from "./videolist.jsx";
import axios from "axios";
// Going to do a axios call function
// Then then state change function

function axioscall(urlonclick) {
  axios.get(urlonclick).then(response => {
    this.setState({
      image: response.data.image,
      mainVideo: response.data,
      comments: response.data.comments
    });
  });
}

function urlonclick(id) {
  return `https://project-2-api.herokuapp.com/videos/${id}?api_key=58d3de8d-b26f-49c9-bb56-b810f7c8432e`;
}

class Videosection extends Component {
  constructor(props) {
    super(props);
    this.axioscall = this.axioscall.bind(this);
    this.urlonclick = this.urlonclick.bind(this);
    this.state = {
      mainVideo: this.props.mainVideo,
      comments: this.props.mainVideo.comments,
      image: this.props.mainVideo.image
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
            <Videolist suggestedlistdata={this.props.sideVideo} axioscall={this.axioscall} urlonclick={this.urlonclick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Videosection;
