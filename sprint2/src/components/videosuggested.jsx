import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videosug extends Component {
  render() {
    console.log(this.props);
    if (this.props.sugs === null) {
      return <div>Loading</div>;
    } else {
      var sugs = this.props.sugs.map(stoop => {
        return (
          <div>
            <Link
              onClick={() =>
                this.props.axioscall(this.props.urlonclick(stoop.id))
              }
              to={"/" + stoop.id}
            >
              <div className="titlesimg">
                <img src={stoop.image} alt="" />
                <div className="titles">
                  <h4>{stoop.title}</h4>
                  <h5>{stoop.channel}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
    return sugs;
  }
}

export default Videosug;
