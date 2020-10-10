import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel'
import Slider from 'infinite-react-carousel';
import linux from '../walls/linux.png'; 
import debian from '../walls/debian.png';
import kali from '../walls/kali.png';
import ssh from '../walls/ssh.png';   


import '../App.css';



export default class Skills extends Component {
    
   


    render() {
         const settings =  {
        autoplay: true,
        duration: 100,
        arrows: true
        };
        return (
          <div className="container mx-auto" id="skills">
           <h1 id="titleSkills" className="text-center" >More</h1>

                        <div className="mt-5">
                            <Slider  className="mx-auto position-relative" { ...settings } >
                            <div className="mx-auto">
                                <div ><img className="shadow" id="imgTech" src={linux}/></div>
                                <p id="pImage" className="text-center">Linux</p>
                            </div>

                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src={debian}/></div>
                                <p id="pImage" className="text-center">Debian</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src={kali}/></div>
                                <p id="pImage" className="text-center">Kali linux</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src={ssh}/></div>
                                <p id="pImage" className="text-center">Ssh</p>
                            </div>
                            

                        </Slider>
                        </div>
                        <div id="cardSkills" className="card bg-transparent">
                            <div id="liSkills">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <li>
                                Linux
                            </li>
                            <li>
                                Debian
                            </li>
                            <li>
                                Kali linux
                            </li>
                            <li>
                                Ssh security shell
                            </li>
                           
                            </div>

                        </div>
                        
                        
                  
           
            
          </div>
        )
    }
}