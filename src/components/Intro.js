import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Intro extends Component {
    render() {
        return (
          <div className="container mx-auto">
            <h1 id="titleIntro" className="text-center mt-5"><u>Who I am ?</u></h1>
            <div id="textContentIntro" className="container text-center mt-5">
                <p>I am a backend and frontend web developer.
                    Constant learning is part of my day to day.

                    I seek to increase my experience within professional environments.
                    I love my job and in my spare time I learn about computer security.
                </p>
            </div>
          </div>
        )
    }
}