import React from "react"; 
import ImgAbout from "../../assests/about.png";
import {Anchor} from 'antd'; 

import Button from "core/components/button/button.component";
import RedirectLink from "core/components/redirect-link/redirect-link.component";

import {AboutPanelStyles,
        Title,
        Subject,
        Container,
        AboutImg} from "./about-panel.styles"; 

const AboutPanel = () =>{
    return(
        <AboutPanelStyles> 
            <Container>
                <div style={{border:"1px solid #737373", width:"150px", height:"150px", padding: "5px", borderRadius:"50%", marginTop:"-80px",  marginBottom:"30px"}}> 
                    <AboutImg imageUrl={ImgAbout}/>
                </div>
                <Title>Read About My Life Struggle Story</Title>
                <br/>
                <br/>
                <Subject> 
                    <h3>Resume</h3>
                    <br/>     
                    All my obsession with web development started right after the first application, where I realized that it was not just about developing, but doing something better than I already did.    
                    <br/>  
                    <br/> 
                    <br/>  
                    <h3>Present</h3>
                    <br/> 
                    I am currently studying new ways of structuring my projects, so, hypothetically, I am able to shorten the creation time and follow a more straight line of the time it takes me to accomplish it. 
                    <br/>  
                    <br/>  
                    <br/> 
                    <h3>Future</h3>
                    <br/>  
                    I plan to further improve my knowledge. To improve my productivity and my ambitions as a developer.
                    <br/>   
                    <br/>  
                    <br/> 
                <Anchor affix={false}> 
                    <div style={{display: "flex", justifyContent:"center" }}> 
                          <a class="object-detail-page-actions download-link" target="_blank" rel="noopener noreferrer" href="https://portfolio-images-upload-9983.s3-sa-east-1.amazonaws.com/wesley+CV.pdf"> 
                            <Button btntype="primary">Hire Me</Button> 
                        </a>
                        <RedirectLink href="#portfolio" title="Portfolio"/>
                    </div>
                </Anchor>
                <br/>
                <br/>
                <br/>
                <br/>
                </Subject>
            </Container> 
        </AboutPanelStyles>
    )
}

export default AboutPanel;