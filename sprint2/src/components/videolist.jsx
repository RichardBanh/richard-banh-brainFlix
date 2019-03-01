import React, { Component } from "react";
import Videosug from "./Videosuggested";

class Videolist extends Component {
  render() {
    console.log(this.props.suggestedlistdata[0]);
    return (
      <div className="flexing1">
        <h4 className="boop">NEXT VIDEO</h4>
        <Videosug
          suggestedlistdata={this.props.suggestedlistdata}
          axioscall={this.props.axioscall}
          urlonclick={this.props.urlonclick}
          mainVideo={this.props.mainVideo}
        />
      </div>
    );
  }
}

export default Videolist;
