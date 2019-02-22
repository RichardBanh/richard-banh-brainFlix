import React, { Component } from 'react';
import Nav from './components/navbar';
import Videosection from './components/videosection';
import Videoup from './components/videoup.jsx';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';

const dakey = '?api_key=df6e978d-71fa-4a43-902b-b51cd12aae35'; 
const urlvideo = `https://project-2-api.herokuapp.com/videos${dakey}`;


axios.get(urlvideo)
     .then(response =>{
       const video = response.data
       console.log(video)
     })

class App extends Component {

  render() {
    const videosection = () =><Videosection mainVideo={this.props.mainVideo} sideVideo={this.props.sideVideo}/>
    const up = () => <Videoup mainVideo={this.props.mainVideo}/>
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component = {videosection}/>
          <Route path="/videoup" component = {up}/>
        </Switch>
      </div>
    );
    }  
}

export default App;
