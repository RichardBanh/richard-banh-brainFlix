import React, { Component } from 'react';
import Nav from './components/navbar';
import Videosection from './components/videosection'
import Videoup from './components/videoup.jsx'
import { Route, Switch} from 'react-router-dom'
import axios from 'axios'
const dakey= '?api_key=58d3de8d-b26f-49c9-bb56-b810f7c8432e'
const urlvid = `https://project-2-api.herokuapp.com/videos${dakey}`
const currentvid = id => `https://project-2-api.herokuapp.com/videos${id}${dakey}`


class App extends Component {
  
  constructor(){
    super();
    this.state = 
    {
      datas: null,
      ids:'',
      current:null
    };
  }

  componentDidMount(){
    axios
    .get( urlvid )
      .then( response => {
        this.setState({datas: response.data})
        this.setState({ids: response.data.id })
      })
      .then(()=>{
        axios.get( currentvid(this.state.ids) )
          .then( response => {
            console.log(response.data)
            this.setState({current: response.data})
          })
      })
  }
 
  render() {
    const suggestedlistdata = this.state.datas
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
