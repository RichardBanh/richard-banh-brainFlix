import React, { Component } from "react";

class Videotitle extends Component {
  dateconverter(timestamp) {
    var date = new Date()
       var year = date.getFullYear(timestamp)
       var month = date.getMonth() + 1
       var day = date.getDate()
       var formatdate = `${month}/${day}/${year}`
       return formatdate
  }
  render() {
    var mainpath = this.props.mainVideo;
    return (
      <div className="videotitle">
        <h1>{mainpath.title}</h1>
        <div className="flexing">
          <h3>
            By {mainpath.channel}
            <span>{this.dateconverter(mainpath.timestamp)}</span>
          </h3>
          <div className="likesviews">
            <div className="views">
              <img src="./Icons/SVG/Icon-views.svg" alt="Eye Icon" />
              <h4>{mainpath.views}</h4>
            </div>
            <div className="likes">
              <img src="./Icons/SVG/Icon-likes.svg" alt="" />
              <h4>{mainpath.likes}</h4>
            </div>
          </div>
        </div>
        <div className="divbox" />
        <p>{mainpath.description}</p>
      </div>
    );
  }
}

export default Videotitle;
