import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




export default class Im extends Component {



    render() {
        return (
          
            <div id="NavigationWall">
             <div id="img">
                <div id="maskImgWall">
                  <div className="row col-md-3 text-center ">
                   <div id="border">
                   </div>
                    <div id="photo" className=" mx-auto">    
                    </div>
                   
                    <div id="title" className=" mx-auto mt-4">
                        
                        <p  className=" mt-5">Web developer</p>
                        <p  >Backend & Frontend </p>
                    </div>
                </div>
                </div>

              </div>

                    <div id="masterBtn" className="form-inline position-relative">
                      <div id="about">
                      <Link to="/im/aboutMe" id="linkAbout">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        About me
                      </Link>
                    </div>

                    <div id="techBtn">
                      <Link to="/im/skills" id="linkTech">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        Tech Skill
                      </Link>
                    </div>

                    <div id="contactBtn">
                      <Link to="/im/contact" id="linkContact">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        Contact Me
                      </Link>
                    </div>

                    <div id="moreBtn">
                      <Link to="/im/more" id="linkMore">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        More
                      </Link>
                    </div>

                    
                  
                </div>
                
                    <div>
                    <Link to="/"><i id="iconArrow" className="fas fa-arrow-circle-left"></i></Link>
                    </div>
                  
            </div>
          

        )
    }
}