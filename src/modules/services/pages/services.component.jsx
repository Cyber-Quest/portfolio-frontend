import React from "react";

import ServicesPanel from "../components/services-panel/services-panel.component";

import {
        ServicesPageStyles
       } from "./services.styles";

const ServicesPage = () =>{
    return(
        <ServicesPageStyles>
            <ServicesPanel/>
        </ServicesPageStyles>
    )
}

export default ServicesPage;