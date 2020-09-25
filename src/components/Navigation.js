import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Navigation extends Component {
    render() {
        return (
          <div id="nav">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark ">
              <Link className="navbar-brand" href="/"><div id="logo" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#others">Others Skills</a>
                  </li>
                  
                </ul>
              </div>
            </nav>
            <div id="NavigationWall">
             <div id="img">
                <div className="row col-md-3 text-center mx-auto">
                    <div id="photo" className=" mx-auto">    
                    </div>
                    <div id="title" className=" mx-auto mt-4">
                        <h1 className="mt-5 mr-4 text-light">Guillermo Ferraz</h1>
                        <h4 className="text-light">Web developer Backend & Frontend </h4>
                    </div>
                </div>
              </div>
              
            </div>
          </div>

        )
    }
}