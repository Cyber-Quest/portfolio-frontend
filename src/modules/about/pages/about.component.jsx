import React from "react";

import AboutPanel from "../components/about-panel/about-panel.component";

import {
        AboutPageStyles
       } from "./about.styles";

const AboutPage = () =>{
    return(
        <AboutPageStyles>
            <AboutPanel/> 
        </AboutPageStyles>
    )
}

export default AboutPage;