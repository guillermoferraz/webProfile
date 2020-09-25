import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class Skills extends Component {
    render() {
        return (
          <div className="container mx-auto" id="skills">
           <h1 id="titleSkills" className="text-center mt-5" ><u>Tech skills</u></h1>
              
                    
                        <div className="form-inline justify-content-center mt-5 ">
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://coralogix.com/wp-content/uploads/2018/04/Coralogix-Nodejs-integration.jpg"/></div>
                                <p className="text-center">Node Js</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/></div>
                                <p className="text-center">Javascript</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://cms-assets.tutsplus.com/uploads/users/30/posts/13323/preview_image/php.png"/></div>
                                <p className="text-center">Php</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.gigapros.com/portal/wp-content/uploads/2014/12/mongodb.png"/></div>
                                <p className="text-center">MongoDb</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechReact" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                                <p className="text-center">React</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.boylesoftware.com/blog/wp-content/uploads/2016/03/240x240_mysql_logo.jpg"/></div>
                                <p className="text-center">MySql</p>
                            </div>
                            
                        </div>
                        
                        <div className="form-inline justify-content-center mt-5 ">
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://opensourcesolution.com.br/wp-content/upload/2016/08/git_logo-300x300.png"/></div>
                                <p className="text-center">Git</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://www.mylifeasasoftwareengineer.com/static/c2ab73679d27885b3004535282a4ca9e/1c72d/ejs.jpg"/></div>
                                <p className="text-center">EJS</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://1.bp.blogspot.com/-ads8NbsvuFk/UWBqEezk1kI/AAAAAAAAZ1Q/N-LZmHnRDzM/s320/handlebars_logo.png"/></div>
                                <p className="text-center">Handlebars</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTechReact" src="https://i.stack.imgur.com/dMXbE.png"/></div>
                                <p className="text-center">Bootstrap</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"/></div>
                                <p className="text-center">Html</p>
                            </div>
                            <div className="mx-auto">
                                <div><img className="shadow" id="imgTech" src="https://marketing.dcassetcdn.com/blog/2016/January/2016-web-design-trends/CSS3Logo_300.png"/></div>
                                <p className="text-center">Css</p>
                            </div>
                            
                        </div>
                        
                        
                  
           
            
          </div>
        )
    }
}