import React, { Component } from 'react';


class Videosug extends Component {
 render() { 
   if(this.props.sugs === null) 
      return (
      <div>Loading</div>
    )
   else {
    let sugs = this.props.sugs.map(stoop =>{
      return(
       <div className="titlesimg">
        <img src={stoop.image} alt=""/>
        <div className="titles">
        <h4>{stoop.title}</h4> 
        <h5>{stoop.channel}</h5>
        </div>
       </div>
      )
    }
  )
    return sugs
  }
  
  return (
  <div>
  <h4 className="boop">NEXT VIDEO</h4>
  {sugs}
  </div>
    // {suglist}
    )
 
}}
 
export default Videosug;