import React from "react";

import PortfolioPanel from "../components/portfolio-panel/portfolio-panel.container";

import {
        PortfolioPageStyles
       } from "./portfolio.styles";

const PortfolioPage = () =>{
    return(
        <PortfolioPageStyles>
            <PortfolioPanel/>
        </PortfolioPageStyles>
    )
}

export default PortfolioPage;