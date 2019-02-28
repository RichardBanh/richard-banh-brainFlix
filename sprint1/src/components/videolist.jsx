import React, { Component } from 'react';
import Video from './videosuggested';

class Videolist extends Component {
 render() { 
  return ( 
   <div className="flexing1">
    <Video sugs={this.props.sugs} />
   </div>
   );
 }
}
 
export default Videolist ;