import React from "react"; 
import ImgAbout from "../../assests/about.png";

import Button from "core/components/button/button.component";

import {AboutPanelStyles,
        Title,
        Subject,
        Container,
        AboutImg} from "./about-panel.styles";
 
const AboutPanel = () =>{
    return(
        <AboutPanelStyles> 
            <Container>
                <div style={{border:"1px solid #737373", width:"150px", height:"150px", padding: "5px", borderRadius:"50%", marginTop:"-120px",  marginBottom:"30px"}}> 
                <AboutImg imageUrl={ImgAbout}/>
                </div>
                <Title>Read About My Life Struggle Story</Title>
                <br/>
                <Subject>    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus?    
                    <br/>  
                    <br/>  
                    <h3>Present</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus?
                    <br/>  
                    <br/>  
                    <h3>Future</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus magnam unde libero quidem quis dolore autem voluptatibus?
                    <br/>   
                    <br/>  
                    <br/> 
                <Button btntype="primary">Hire Me</Button> 
                <Button btntype="primaryOutlined" style={{marginLeft:"10px"}}>
                    Portfolio
                </Button>
                </Subject>
            </Container> 
        </AboutPanelStyles>
    )
}

export default AboutPanel;