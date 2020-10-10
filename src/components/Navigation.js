import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Navigation extends Component {
    render() {
        return (
          
            <div id="NavigationWall">
             <div id="img">
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