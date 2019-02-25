import React, { Component } from 'react';
import Nav from './components/navbar';
import Videosection from './components/videosection'
import Videoup from './components/videoup.jsx'
import { Route, Switch} from 'react-router-dom'
import axios from 'axios'
const dakey= '?api_key=58d3de8d-b26f-49c9-bb56-b810f7c8432e'
const urlvid = `https://project-2-api.herokuapp.com/videos${dakey}`


class App extends Component {
  
  constructor(){
    super();
    this.state = 
    {
      data: null,
      id:'',
      comment:[]
    };
  }

  componentDidMount(){
   
    axios
    .get(urlvid)
      .then(response=>{
        this.setState({data:response.data, id:response.data[0].id})
      })
      const currentvideo = `https://project-2-api.herokuapp.com/videos/${this.state.id}${dakey}`
      .then(()=>{
        axios
          .get(currentvideo)
          .then(response=>{
            this.setState({
              comment:response.data.comments
            })
          })

      })
  }
 
  render() {
    const suggestedlistdata = this.state.data
    console.log(suggestedlistdata)
    const videosection = () =><Videosection mainVideo={this.props.mainVideo} sideVideo={suggestedlistdata}/>
    const up = () => <Videoup mainVideo={this.props.mainVideo}/>
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/:id" exact component = {videosection}/>
          <Route path="/videoup" component = {up}/>
        </Switch>
      </div>
    );
    }  
}

export default App;
