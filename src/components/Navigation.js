import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import neuro from '../walls/neuro.mp4';


import '../App.css';


export default class Navigation extends Component {
    render() {
        return (
          
            <div id="NavigationWall">
             <div id="img">
                <div id="video" className="position-absolute">
                <ReactPlayer 

                  url={neuro}
                  className='react-player position-absolute m-0 p-0'
                  height="150vh"
                  width="150vw"
                  
                  backgroud-size="cover"
                  loop
                  playing



                  />

                </div>
                <div id="maskImgWall">
                    <div id="gf">
                      <Link to="/im" id="link">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        Guillermo Ferraz
                      </Link>
                    </div>




                </div>
                </div>

              </div>
              
          
          

        )
    }
}