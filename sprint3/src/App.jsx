import React, { Component } from "react";
import Nav from "./components/Navbar";
import Videosection from "./components/Videosection";
import Videoup from "./components/Videoup";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

const urlvid = `http://localhost:8080/videos/`;
const currentvid = id =>
  `http://localhost:8080/videos/${id}`;

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
              render={(routeProps) => (
                <Videosection
                  mainVideo={this.state.current}
                  sideVideo={this.state.data}
                  {...routeProps}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
