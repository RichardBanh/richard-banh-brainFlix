import React, { Component } from "react";
import Nav from "./components/navbar";
import Videosection from "./components/videosection";
import Videoup from "./components/videoup";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
const dakey = "?api_key=58d3de8d-b26f-49c9-bb56-b810f7c8432e";
const urlvid = `https://project-2-api.herokuapp.com/videos${dakey}`;
const currentvid = id =>
  `https://project-2-api.herokuapp.com/videos/${id}${dakey}`;

function clickedonme(params) {}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: "",
      current: [],
      loaded: false,
      new_vid_id_data: []
    };
  }
  componentDidMount() {
    axios
      .get(urlvid)
      .then(response => {
        this.setState({ data: response.data });
        this.setState({ id: response.data[0].id });
      })
      .then(() => {
        axios.get(currentvid(this.state.id)).then(response => {
          this.setState({ current: response.data });
          this.setState({ loaded: true });
        });
      });
  }

  render() {
    console.log(this.state.data);
    console.log(this.state.current);
    console.log(this.state.loaded);

    if (this.state.loaded === false) {
      return <div>Loading</div>;
    } else {
      const up = () => <Videoup mainVideo={this.props.mainVideo} />;
      return (
        <div>
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Videosection
                  mainVideo={this.state.current}
                  sideVideo={this.state.data}
                />
              )}
            />
            <Route path="/videoup" component={up} />
            <Route
              path="/:id"
              render={routeProps => {
                const videoId = routeProps.match.params.id;
                return <Videosection mainVideo={this.state.new_vid_id_data} />;
              }}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
