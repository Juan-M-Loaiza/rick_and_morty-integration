 import React from "react";
 import './About.css'
 
 
 
 class About extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            
            <div className="about-main">
                <div className="about-contain">
                    <div className="description-about">
                        <h2>Creador</h2>
                        <p>Mi nombre es Juan Manuel Orrego de la cohorte FT-38a, este es mi proyecto integrador y espero que les guste ;)
                        </p>
                        <button className="button-linkedin"><a href="https://www.linkedin.com/in/juan-manuel-orrego-loaiza-630167269/" target="blanc"><img src="https://res.cloudinary.com/diewi2ur1/image/upload/v1683640594/LinkedIn_Logo_fdozzr.svg" className="img-linkedin" alt="linkedin"/></a></button>
                    </div>
                    <div className="img-container">
                        <img src="https://res.cloudinary.com/diewi2ur1/image/upload/v1683638051/WhatsApp_Image_2023-05-09_at_8.13.42_AM_jbacxz.jpg" className="img-about" alt="me" />
                    </div>
                </div>
            </div>

        );
    }
 }

 export default About;