import React, { Component } from 'react';
import Videosug from './videosuggested';

class Videolist extends Component {
 render() { 
  console.log(this.props.suggestedlistdata)
  return ( 
   <div className="flexing1">
    <Videosug sugs={this.props.suggestedlistdata} />
   </div>
   );
 }
}
 
export default Videolist ;