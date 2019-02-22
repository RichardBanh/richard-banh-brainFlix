import React, { Component } from 'react';


class Video extends Component {
 render() { 
const sugs = this.props.sugs.map(stoop =>{
 return(
  <div className="titlesimg">
   <img src={stoop.image} alt=""/>
   <div className="titles">
   <h4>{stoop.title}</h4> 
   <h5>{stoop.id}</h5>
   </div>
  </div>
 )
})
  return (
   <div>
   <h4 className="boop">NEXT VIDEO</h4>
  {sugs}
  </div>
    // {suglist}
    )
 }
}
 
export default Video ;