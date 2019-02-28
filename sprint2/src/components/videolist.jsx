import React, { Component } from "react";
import Videosug from "./videosuggested";

class Videolist extends Component {
  render() {
    console.log(this.props.suggestedlistdata[0]);
    return (
      <div className="flexing1">
        <h4 className="boop">NEXT VIDEO</h4>
        <Videosug sugs={this.props.suggestedlistdata} axioscall={this.props.axioscall} urlonclick={this.props.urlonclick}/>
      </div>
    );
  }
}

export default Videolist;
