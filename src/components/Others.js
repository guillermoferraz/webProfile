import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Others extends Component {
    render() {
        return (
          <div className="container mx-auto" id="others">
           <h1 id="titleSkills" className="text-center mt-5" ><u>Others skills</u></h1>
              
                    
                        <div className="form-inline justify-content-center mt-5 ">
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechSsh" src="https://www.pngkit.com/png/full/795-7954673_ssh-logo-png-transparent-secure-shell.png"/></div>
                                <p className="text-center">SSH</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechSsh" src="https://c2.staticflickr.com/2/1632/26427506582_e1d7933281_o.jpg"/></div>
                                <p className="text-center">Debian</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechSsh" src="https://img.helpnetsecurity.com/wp-content/uploads/2019/06/09094054/kali-linux.jpg"/></div>
                                <p className="text-center">Debian</p>
                            </div>
                        </div>
                       
                  
           
            
          </div>
        )
    }
}