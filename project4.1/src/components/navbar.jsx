import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Nav extends Component {
 render() { 
  return (  
   <div className="navigation">
        <div className= "inner">
        <Link to='./'> 
           <img src="./Logo/Logobrainflix.svg" alt="logo"/>
        </Link>
            <nav>
                <input type="search" name="" id=""placeholder="Search"/>
                <ul>
                    <Link to='./videoup'>
                        <button >
                            <img className="argh" src="./plus.svg" alt=""/><p>UPLOAD</p>
                        </button>
                    </Link>   
                    <img className="usericon" src="./Images/Mohan-muruge.jpg" alt="User"/>
                </ul>
            </nav>
        </div>
    </div>
  );
 }
}
 
export default Nav;