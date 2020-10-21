import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../myProfileGFremove.png";

export default class welcome extends Component {
    render(){
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }
    

        return (
        
            <div>
                
                <div id="maskImgWall">
                    <div id="gf">
                      <Link to="" id="link">
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        Guillermo Ferraz
                      </Link>
                    </div>
                </div>

                <div id="titleIndex">
                    <h3>Desarrollo web</h3>
                    <h4>Frontend & Backend</h4>
                </div>

                <div id="wText">
                    <i id="brackets"  class="fas fa-code"></i>
                    <h5>Hola mundo</h5>
                    <h6 id="textMe">
                        Mi nombre es Guillermo Ferraz y soy desarrollador web backend & frontend.
                         Me encanta mi trabajo como desarrollador, soy un amante de la informatica y de la tecnologia en general.Me gusta mucho aprender de nuevas tecnologias y nuevos metodos de desarrollo!.
                             
        
                    </h6>
                    <h6 id="textMe">Me dedico al desarrollo de apps web, mobile y tambien de Escritorio. Para mi trabajo utilizo diferentes herramientas y frameworks, selecciono las herramientas a utilizar acorde a la necesidad del proyecto que voy a realizar, sin hacerme dependiente a ninguna de estas.


Me gusta utilizar diversas herramientas  asi como tambien aprender de nuevas, personalmente creo que es importante para tener un mejor rendimiento como desarrollador.</h6>
                 </div> 
                    
                 <div id="meP">
                     <p>Mi pensamiento: </p>
                     <h6 id="meT">"Nunca rendirme"</h6>
                     <h6 id="meT">"Nunca parar de aprender"</h6>
                </div>


                <div id="techSkill">
                     <div>
                        <h6>Conocimientos en tecnologias de programacion web.</h6>
                     </div>
                </div>

                <div id="mySlider">
                    <Slider {...settings}>
                         <div id="logs">
                            <div ><i id="html" class="fab fa-html5"></i></div>
                            <h6>html</h6>
                         </div>

                         <div  id="logs">
                            <div><i id="css" class="fab fa-css3-alt"></i></div>
                             <h6>css</h6>
                         </div>

                         <div  id="logs">
                            <div><i id="js" class="fab fa-js-square"></i></div>
                             <h6>javascript</h6>
                         </div>

                         <div  id="logs">
                            <div><i id="react" class="fab fa-react"></i></div>
                             <h6>react</h6>
                         </div>

                         <div  id="logs">
                            <div><i id="node" class="fab fa-node"></i></div>
                             <h6>node js</h6>
                         </div>
                        
                         <div  id="logs">
                            <div><i id="git" class="fab fa-git-alt"></i></div>
                             <h6>git</h6>

                         </div>

                         <div id="logs">
                            <div><i id="docker" class="fab fa-docker"></i></div>
                             <h6>docker</h6>
                         </div>

                         <div id="logs">
                            <div><i id="php" class="fab fa-php"></i></div>
                             <h6>php</h6>
                         </div>
                            
                         <div  id="logs">
                            <div><i id="bootstrap" class="fab fa-bootstrap"></i></div>
                             <h6>bootstrap</h6>

                         </div>

                         <div  id="logs">
                            <div><i id="db" class="fas fa-database"></i></div>
                             <h6>bases de datos sql & nosql</h6>
                         </div>





                        
                    </Slider>
                    <article>
                        <p>Como anteriormente mencione , desarrollo diferentes tipos de apps y servicios, api rest , apps con conexiones a base de datos relacionales ,no relacionales o ambas. Aplicaciones CRUD , autenticaciones de usuarios , encriptado de password , passport y todo lo tipico que conllevan las aplicaciones con login , cuentas de usuarios y consumo de alguna api rest. Etc. 
Utilizo diferentes tipos de servidores de desarrollo, no tengo preferidos pero destaco a Node js por el gran potencial que este posee.

Otras de las tecnologias y lenguajes que utilizo: Electron , Ionic, python, redux, ejs y handlebars como motores de plantillas.</p>
                    </article>


                    

                </div>

                
                <div id="techSkill">
                     <div>
                        <h6>Sobre mi</h6>
                     </div>
                </div>

                <div id="aboutMe">
                    <img id="photo" src={photo}></img>
                    <p>
                        Si bien como mencione anteriormente trato de no generar dependencia de un framework o lenguaje en especifico , si que tengo algunas preferencias en mi entrono de desarrollo , en las herramientas , sistema operativo ,etc.
Siendo que no es tan importante y no deberia afectar en el resultado de nuestro trabajo quizas mas de unos cuantos nos sentimos mas comodos utilizando algun editor de codigo en especifico o S.O.

En mi caso mi sistema operativo por excelencia para trabajar es DEBIAN, de todos modos en ocasiones no tengo mas alternativa que utilizar Windows , pero me quedo con DEBIAN.

En cuanto al editor de codigo o entorno de desarrollo, es logico que si preferimos alguno en especifico es porque hemos utilizado varios, quizas esto no influya en el resultado del trabajo , pero si que es agradable sentirse comodo escribiendo codigo. Entre varios Visual Studio Code ha tomado mucha popularidad, y si que es muy bueno destacando por encima de otros editores, pero en mi caso me quedo con NEOVIM. 


Aprender a utilizar NEOVIM pude no ser muy amistoso al principio, pero cuando llegamos a desenvolvernos de manera practica en NEOVIM personalmente noto la diferencia por encima de otros editores en cuanto al rendimiento. La no utilizacion del mouse aunque no parezca para muchos , me parece de suma importancia , y lo digo a nivel personal.

Me fascina LINUX y el potencial del terminal o consola de LINUX. Pienso que como desarrollador es fundamental conocer y utilizar el terminal asi como conocer los comandos de linux. 


                    </p>
                </div>  
                
                <div id="techSkillC">
                     <div className="row">
                        <h6>Contacto</h6>
                         <a href="https://www.linkedin.com/in/guillermo-ferraz-b24b231b4" target="_blank"><p><i id="in" className="fab fa-linkedin-in  ml-5"></i>Linkedin</p></a>


                        <i className="fas fa-envelope ml-auto"></i><p>guillermoferrazdst@gmail.com</p>
                        <i className="fas fa-phone-square-alt"></i><p>(+598) 099 218 225</p>
                                            </div>
                </div>
                
                <div id="contact">
                    
                </div>


                
            </div>
            
    
        )
    }

}
