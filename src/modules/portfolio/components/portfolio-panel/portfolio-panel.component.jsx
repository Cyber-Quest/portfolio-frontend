import React from "react";

import {PortfolioPanelStyles,
        Title,
        Subject,
        Container} from "./portfolio-panel.styles";

const PortfolioPanel = () =>{
    return(
        <PortfolioPanelStyles>
            <Container> 
                <Title>My Portfolio</Title>
                <br/>
                <Subject>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus?  
                </Subject>
            </Container> 
        </PortfolioPanelStyles>
    )
}

export default PortfolioPanel;