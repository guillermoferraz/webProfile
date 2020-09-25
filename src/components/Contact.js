import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Contact extends Component {
    render() {
        return (
         <div className=" mx-auto" id="contact">
            <h1 className="text-center" id="titleContact"><u>Contact me !</u></h1>
            <div className="form-inline mx-auto">
                <a href="https://www.linkedin.com/in/guillermo-ferraz-b24b231b4" target="_blank" className="mx-auto"><img id="in" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png"/></a>
                
                <div className="row mx-auto">
                    <img className="mx-auto" id="email" src="https://cecytebcs.edu.mx/wp-content/uploads/2015/10/email.ico"/>
                    <p className="ml-3" id="data">guillermoferrazdst@gmail.com</p>
                </div>
                
                <div className="row mx-auto">
                    <img className="mx-auto" id="phone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQP5nbIeM-uUkONBHtBk1s18yVAxSuiYkHAQ&usqp=CAU"/>
                    <p className="ml-3" id="data">(+598) 099 218 225</p>
                </div>
            </div>
         </div>

        )
    }
}
