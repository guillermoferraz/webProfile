import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel'
import Slider from 'infinite-react-carousel';


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
           <h1 id="titleSkills" className="text-center" >Tech skills</h1>

                        <div className="mt-5">
                            <Slider  className="mx-auto position-relative" { ...settings } >
                            <div className="mx-auto">
                                <div ><img className="shadow" id="imgTech" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/></div>
                                <p id="pImage" className="text-center">Node Js</p>
                            </div>

                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/></div>
                                <p id="pImage" className="text-center">Javascript</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://cms-assets.tutsplus.com/uploads/users/30/posts/13323/preview_image/php.png"/></div>
                                <p id="pImage" className="text-center">Php</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.gigapros.com/portal/wp-content/uploads/2014/12/mongodb.png"/></div>
                                <p id="pImage" className="text-center">MongoDb</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechReact" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                                <p id="pImage" className="text-center">React</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.boylesoftware.com/blog/wp-content/uploads/2016/03/240x240_mysql_logo.jpg"/></div>
                                <p id="pImage" className="text-center">MySql</p>
                            </div>

                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://opensourcesolution.com.br/wp-content/upload/2016/08/git_logo-300x300.png"/></div>
                                <p id="pImage" className="text-center">Git</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.mylifeasasoftwareengineer.com/static/c2ab73679d27885b3004535282a4ca9e/1c72d/ejs.jpg"/></div>
                                <p id="pImage" className="text-center">EJS</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://1.bp.blogspot.com/-ads8NbsvuFk/UWBqEezk1kI/AAAAAAAAZ1Q/N-LZmHnRDzM/s320/handlebars_logo.png"/></div>
                                <p id="pImage" className="text-center">Handlebars</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechReact" src="https://i.stack.imgur.com/dMXbE.png"/></div>
                                <p id="pImage" className="text-center">Bootstrap</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/></div>
                                <p id="pImage" className="text-center">Html</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://marketing.dcassetcdn.com/blog/2016/January/2016-web-design-trends/CSS3Logo_300.png"/></div>
                                <p id="pImage" className="text-center">Css</p>
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
                                Javascript
                            </li>
                            <li>
                                ReactJs
                            </li>
                            <li>
                                Git
                            </li>
                            <li>
                                Html
                            </li>
                            <li>
                                Css
                            </li>
                            <li>
                                Node Js
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Php
                            </li>
                            <li>
                                Ejs
                            </li>
                            <li>
                                Handlebars
                            </li>
                            <li>
                                MySql
                            </li>
                            <li>
                                MongoDb
                            </li>
                            <li>
                                Javascript
                            </li>
                            </div>

                        </div>
                        
                        
                  
           
            
          </div>
        )
    }
}