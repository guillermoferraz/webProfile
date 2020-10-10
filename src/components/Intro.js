import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Intro extends Component {
    render() {
        return (
          
              
            <div className="container mx-auto position-absolute" id="whoIm">
              <h1 id="titleIntro" className="text-center mt-5">Who I am ?</h1>
              <div id="textContentIntro" className="container text-center mt-5">
                  <p>I am a backend and frontend web developer.
                      Constant learning is part of my day to day.

                      I seek to increase my experience within professional environments.
                      I love my job and in my spare time I learn about computer security.
                      I am currently studying python and libraries such as tensorflow to increase my technical capabilities and develop better quality applications.
                  </p>
              </div>
            </div>
          
        )
    }
}